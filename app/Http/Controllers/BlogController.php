<?php

namespace App\Http\Controllers;

use Log;
use App\Models\Blog;
use App\Models\User;
use App\Models\Doctor;
use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

use Illuminate\Http\Response;

use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Resources\BlogsCollection;
use App\Http\Requests\BlogSearchRequest;
use App\Http\Requests\UpdateBlogRequset;
use App\Http\Resources\BlogSearchResource;

class BlogController extends Controller
{
    // public function Allblogs(Request $request)
    // {
    //     $user = $request->user();
    //      $blogs = Blog::where('doctor_id', $user->id)
    //     ->with('category') // Load the 'category' relationship
    //     ->orderBy('created_at', 'desc')
    //     ->paginate(10);

    // // Transform the collection using BlogResource to include category name
    // return BlogResource::collection($blogs);
    // }


    public function search(BlogSearchRequest $request)
    {
        // Retrieve the validated search query from the request
        $searchQuery = $request->validated()['query'];

        // Query the blogs based on the search query
        $filteredBlogs = Blog::where('title', 'like', '%' . $searchQuery . '%')->get();

        // Transform the filtered blogs using the resource class
        $transformedBlogs = BlogSearchResource::collection($filteredBlogs);

        return response()->json([
            'data' => $transformedBlogs,
        ]);
    }
    // public function store(StoreBlogRequest $request)    
    // {
    //     $data = $request->validate();
    //     if (isset($data['image'])) {
    //         $relativePath = $this->saveImage($data['image']);
    //         $data['image'] = $relativePath;
    //     }
    //     $blog = Blog::create($data);
    //     return new BlogResource($blog);
    // }

    public function store(StoreBlogRequest $request)
    {

        $validatedData = $request->validated();

        // Check if the user is authenticated
        if (Auth::check()) {
            // Retrieve the authenticated user
            $authenticatedUser = Auth::user();

            // Check if the authenticated user has the 'doctor' role
            if ($authenticatedUser->role === 'doctor') {
                $doctor = $authenticatedUser->doctor;

                // If the doctor record doesn't exist, create a new one
                if (!$doctor) {
                    $doctor = Doctor::create([
                        'user_id' => $authenticatedUser->id,
                        // Add any other required fields for the Doctor model
                    ]);
                }

                // Check if the category exists
                $categoryId = $validatedData['category_id'];
                $category = Category::find($categoryId);

                if ($category) {
                    // Set the doctor_id based on the associated doctor record
                    $validatedData['doctor_id'] = $doctor->id;

                    // Handle image upload if provided
                    if ($request->hasFile('image')) {
                        $image = $request->file('image');
                        $relativePath = $image->store('images', 'public');
                        $validatedData['image'] = $relativePath;
                    }

                    // Create the blog entry
                    $blog = Blog::create($validatedData);

                    // Return a success response
                    return response()->json(['message' => 'Blog created successfully', 'blog' => $blog], 201);
                } else {
                    return response()->json(['error' => 'Invalid category ID'], 400);
                }
            } else {
                return response()->json(['error' => 'Unauthorized'], 403);
            }
        } else {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }
    }



    private function saveImage($image)
    {
        // Check if image is valid base64 string
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            // Take out the base64 encoded text without mime type
            $image = substr($image, strpos($image, ',') + 1);
            // Get file extension
            $type = strtolower($type[1]); // jpg, png, gif

            // Check if file is an image
            if (!in_array($type, ['jpg', 'jpeg', 'gif', 'png'])) {
                throw new \Exception('invalid image type');
            }
            $image = str_replace(' ', '+', $image);
            $image = base64_decode($image);

            if ($image === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }

        $dir = 'public/images';
        $file = Str::random() . '.' . $type;
        $absolutePath = public_path($dir);
        $relativePath = $dir . $file;
        if (!File::exists($absolutePath)) {
            File::makeDirectory($absolutePath, 0755, true);
        }
        file_put_contents($relativePath, $image);

        return $relativePath;
    }
    public function update(UpdateBlogRequset $request, Blog $blog)
    {
        $data = $request->validated();


        if (isset($data['image'])) {
            $relativePath = $this->saveImage($data['image']);
            $data['image'] = $relativePath;


            if ($blog->image) {
                $absolutePath = public_path($blog->image);
                File::delete($absolutePath);
            }
        }
        $blog->update($data);
        return new BlogResource($blog);
    }
    public function destroy(Blog $blog, Request $request)
    {
        $user = Auth::id();
        if ($user !== $blog->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $blog->delete();


        if ($blog->image) {
            $absolutePath = public_path($blog->image);
            File::delete($absolutePath);
        }

        return response('', 204);
    }
}

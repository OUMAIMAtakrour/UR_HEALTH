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

    public function show($id)
    {
        $blog = Blog::findOrFail($id); 

        return response()->json($blog);
    }
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
        $searchQuery = $request->validated()['query'];

        $filteredBlogs = Blog::where('title', 'like', '%' . $searchQuery . '%')->get();

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

        if (Auth::check()) {
            $authenticatedUser = Auth::user();

            if ($authenticatedUser->role === 'doctor') {
                $doctor = $authenticatedUser->doctor;

                if (!$doctor) {
                    $doctor = Doctor::create([
                        'user_id' => $authenticatedUser->id,
                    ]);
                }

                $categoryId = $validatedData['category_id'];
                $category = Category::find($categoryId);

                if ($category) {
                    $validatedData['doctor_id'] = $doctor->id;

                    if ($request->hasFile('image')) {
                        $image = $request->file('image');
                        $relativePath = $image->store('images', 'public');
                        $validatedData['image'] = $relativePath;
                    }

                    $blog = Blog::create($validatedData);

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
        if (preg_match('/^data:image\/(\w+);base64,/', $image, $type)) {
            $image = substr($image, strpos($image, ',') + 1);
            $type = strtolower($type[1]); 

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

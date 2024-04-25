<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Resources\BlogResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;

use Illuminate\Http\Response;

use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequset;
use App\Http\Resources\BlogsCollection;

class BlogController extends Controller
{
    public function index(Request $request)
    {

        $user = $request->user();
        return BlogResource::collection(Blog::where('user_id', $user->id)
            ->orderBy('created_at', 'desc')->paginate(10));
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

        if (auth()->check()) {
            $validatedData['user_id'] = auth()->user()->id;
        } else {
            $validatedData['user_id'] = null;
        }

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $relativePath = $image->store('images', 'public');
            $validatedData['image'] = $relativePath;
        }

        $blog = Blog::create($validatedData);

        return new BlogResource($blog);
    }
    public function Allblogs()
    {
        return new BlogsCollection(Blog::all());
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

        $dir = '/public/images';
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

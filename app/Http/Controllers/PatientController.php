<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\BlogsCollection;
use App\Models\Blog;

class PatientController extends Controller
{
    public function Allblogs()
    {
        $blogs = Blog::with('categories')->get();
        return new BlogsCollection($blogs);
    }
}

<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\CategoryCollection;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Models\User;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();


        return new CategoryCollection($categories);
    }


    public function store(StoreCategoryRequest $request)
    {
        $validated = $request->validated();

        $adminRole = 'admin';

        $user = Auth::user();

        if ($user && $user->role === $adminRole) {
            $adminUser = User::where('role', $adminRole)->first();

            if ($adminUser) {
                $category = $adminUser->category()->create([
                    'category_name' => $validated['category_name'],
                ]);

                return new CategoryResource($category);
            } else {
                return response()->json(['error' => 'No admin user found'], 404);
            }
        } else {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
    }

    public function show(Request $request, Category $category)
    {
        return new CategoryResource($category);
    }

    public function update(UpdateCategoryRequest $request, Category $category)
    {
        $validated = $request->validated();

        $category->update($validated);

        return new CategoryResource($category);
    }

 
    public function destroy(Request $request, Category $category)
    {
        $category->delete();
        return response()->noContent(204);
    }
}

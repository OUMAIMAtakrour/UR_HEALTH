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
        // Validate the incoming request
        $validated = $request->validated();

        // Define the admin role you're looking for (e.g., 'admin')
        $adminRole = 'admin';

        // Retrieve the authenticated user
        $user = Auth::user();

        // Ensure the authenticated user has the admin role
        if ($user && $user->role === $adminRole) {
            // Find the admin user based on the role
            $adminUser = User::where('role', $adminRole)->first();

            // Check if the admin user exists
            if ($adminUser) {
                // Create the category associated with the admin user
                $category = $adminUser->category()->create([
                    'category_name' => $validated['category_name'],
                ]);

                // Return the created category resource
                return new CategoryResource($category);
            } else {
                // If no admin user is found, return an error response
                return response()->json(['error' => 'No admin user found'], 404);
            }
        } else {
            // If the user does not have the admin role, return an error response
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Category $category)
    {
        $category->delete();
        return response()->noContent(204);
    }
}

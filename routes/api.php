<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\PatientController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/signup', [AuthController::class, 'signup']);
Route::get('/blogs', [PatientController::class, 'Allblogs']);
Route::get('/category', [CategoryController::class, 'index']);
Route::get('blogs/search', [BlogController::class, 'search']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/medicines', [DashboardController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('blog', BlogController::class);
    Route::apiResource('categories', CategoryController::class);
});

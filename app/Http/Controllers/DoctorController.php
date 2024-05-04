<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    
    public function index() {
        $doctors = Doctor::with('users')->whereHas('users', function ($query) {
            $query->where('role', 'doctor');
        })->get();

        return response()->json($doctors);
    }
}

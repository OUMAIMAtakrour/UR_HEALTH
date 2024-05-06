<?php

namespace App\Http\Controllers;

use App\Models\Doctor;
use App\Models\Booking;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\DoctorResource;

class DoctorController extends Controller
{

    public function index()
    {
        $doctors = Doctor::with('users')->whereHas('users', function ($query) {
            $query->where('role', 'doctor');
        })->get();

        return response()->json($doctors);
    }



    public function myBlog()
    {
        // Retrieve the authenticated user (doctor)
        $authenticatedUser = Auth::user();
    
        if ($authenticatedUser) {
            // Check if the authenticated user has the 'doctor' role
            if ($authenticatedUser->role === 'doctor') {
                // Retrieve the doctor instance associated with the authenticated user
                $doctor = $authenticatedUser->doctor;
    
                if ($doctor) {
                    // Eager load the blogs relationship with the doctor, and include the category relationship for each blog
                    $blogs = $doctor->load(['blogs' => function ($query) {
                        $query->with('category');
                    }])->blogs;
    
                    // Return a JSON response with the blogs associated with the authenticated doctor
                    return response()->json(['blogs' => $blogs], 200);
                } else {
                    return response()->json(['error' => 'Doctor not found'], 404);
                }
            } else {
                return response()->json(['error' => 'User is not a doctor'], 403);
            }
        } else {
            return response()->json(['error' => 'User not authenticated'], 401);
        }
    }
    public function show($id)
    {
        $doctor = Doctor::with('users')->findOrFail($id);


        $shifts = Doctor::$shiftEnumValues;
        $reservedSlots = Booking::where('doctor_id', $id)
            ->select('shifts', 'booking_date')
            ->get();

        $doctor->shifts = $shifts;
        $doctor->reservedSlots = $reservedSlots;

        return response()->json($doctor);
    }

    public function getShifts($id)
    {
        $doctor = Doctor::findOrFail($id);
        $shifts = Booking::where('doctor_id', $id)
            ->distinct('shifts')
            ->pluck('shifts')
            ->toArray();

        return response()->json(['shifts' => $shifts]);
    }
}

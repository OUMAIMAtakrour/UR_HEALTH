<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Booking;
use App\Models\Patient;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\BookingResource;
use App\Http\Requests\BookAppointmentRequest;

class BookingController extends Controller
{
    public function store(BookAppointmentRequest $request)
    {
        $validatedData = $request->validated();

        // Get the authenticated user
        $user = Auth::user();

        // Check if the authenticated user has the 'patient' role
        if ($user && $user->role === 'patient') {
            // Retrieve the associated patient record
            $patient = Patient::where('user_id', $user->id)->first();

            if (!$patient) {
                // If patient record not found for the user, return an error
                return response()->json(['error' => 'Patient record not found'], 404);
            }

            // Check for existing booking
            $existingBooking = Booking::where('doctor_id', $validatedData['doctor_id'])
                ->where('shifts', $validatedData['shifts'])
                ->where('booking_date', $validatedData['booking_date'])
                ->first();

            if ($existingBooking) {
                return response()->json(['error' => 'The requested slot is already booked.'], 422);
            }

            // Create a new booking
            $booking = Booking::create([
                'patient_id' => $patient->id, // Assign patient_id from the associated patient record
                'doctor_id' => $validatedData['doctor_id'],
                'shifts' => $validatedData['shifts'],
                'booking_date' => $validatedData['booking_date'],
            ]);

            // Return the created booking resource
            return new BookingResource($booking);
        } else {
            // If user is not authenticated or does not have the 'patient' role, return an error
            return response()->json(['error' => 'Unauthorized'], 403);
        }
    }

    public function deleteExpiredBookings()
    {
        $today = Carbon::today();
        $expiredBookings = Booking::whereDate('booking_date', '<', $today)->delete();

        return response()->json(['message' => 'Expired bookings deleted successfully']);
    }
}

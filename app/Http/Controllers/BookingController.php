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
    public function getReservedSlots($doctorId)
    {
        $reservedSlots = Booking::where('doctor_id', $doctorId)
            ->select('shifts', 'booking_date')
            ->get();

        return response()->json($reservedSlots);
    }
    public function store(BookAppointmentRequest $request)
    {
        $validatedData = $request->validated();

        $user = Auth::user();

        if ($user && $user->role === 'patient') {
            $patient = Patient::where('user_id', $user->id)->first();

            if (!$patient) {
                return response()->json(['error' => 'Patient record not found'], 404);
            }

         
            $existingBooking = Booking::where('doctor_id', $validatedData['doctor_id'])
                ->where('shifts', $validatedData['shifts'])
                ->where('booking_date', $validatedData['booking_date'])
                ->first();

            if ($existingBooking) {
                return response()->json(['error' => 'The requested slot is already booked.'], 422);
            }

            
            $booking = Booking::create([
                'patient_id' => $patient->id, 
                'doctor_id' => $validatedData['doctor_id'],
                'shifts' => $validatedData['shifts'],
                'booking_date' => Carbon::parse($validatedData['booking_date']),
            ]);

            return new BookingResource($booking);
        } else {
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

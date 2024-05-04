<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request)
    {
        return [
            'id' => $this->id,
            'patient' => $this->patient->name, // Assuming 'name' property exists in the Patient model
            'doctor' => $this->doctor->name, // Assuming 'name' property exists in the Doctor model
            'shifts' => $this->shifts,
            'booking_date' => $this->booking_date->format('Y-m-d'),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}

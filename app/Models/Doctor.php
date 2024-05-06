<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
    ];


    public static $shiftEnumValues = ['8:00', '9:00', '10:00', '11:00'];
    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

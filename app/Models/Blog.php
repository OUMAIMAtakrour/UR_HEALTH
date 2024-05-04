<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'content', 'image', 'doctor_id','category_id'];

    public function doctors()
    {
        return $this->belongsTo(Doctor::class, 'doctor_id');
    }
    public function Categories()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}


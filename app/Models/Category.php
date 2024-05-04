<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['admin_id', 'category_name'];


    public function admins()
    {
        return $this->belongsTo(Admin::class, 'admin_id');
    }


    public function blogs()
    {
        return $this->hasOne(Blog::class, 'category_id');
    }
}

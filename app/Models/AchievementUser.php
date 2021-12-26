<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AchievementUser extends Model
{
    use HasFactory;
    /*
     *
     */
    protected $fillable = [
        'achievement_id',
        'user_id'
    ];
}

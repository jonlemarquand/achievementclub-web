<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'cover_image',
        'publisher_id',
        'developer_id',
        'overall_gamerscore',
        'release_date_jp',
        'release_date_eu',
        'release_date_us',
        'release_date_global',
    ];
}

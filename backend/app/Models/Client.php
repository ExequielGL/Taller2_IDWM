<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    public $timestamps = false;
    
    protected $fillable = [
        'rut_or_dni',
        'name',
        'last_name',
        'email',
        'points',
    ];
}

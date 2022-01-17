<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
//use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;

class Message extends Model
{
    use HasFactory;
    use SoftDeletes;

    private $fillables = ['name', 'subject', 'message'];
}

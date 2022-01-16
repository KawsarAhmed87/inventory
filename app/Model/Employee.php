<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'name', 'email', 'address', 'salary', 'joinint_date', 'phone', 'photo', 'nid',
    ];
}

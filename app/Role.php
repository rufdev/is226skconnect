<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Role extends Model
{
    use HasApiTokens;
    //
    protected $fillable = [
        'name', 'code', 'description'
    ];
    protected $table = 'roles';
}

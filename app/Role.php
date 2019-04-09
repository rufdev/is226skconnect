<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Role extends Model
{
    use HasApiTokens;
    //
    protected $fillable = [
        'name', 'code', 'description'
    ];
    protected $table = 'roles';

    public function users(){

        return $this->hasMany('App\User');

    }
}

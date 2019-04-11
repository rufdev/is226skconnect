<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Memo extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'title', 'body', 'user_id', 'featureimage', 'url'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}

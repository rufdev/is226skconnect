<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Post extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'title', 'body', 'user_id', 'feature_img', 'url'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}

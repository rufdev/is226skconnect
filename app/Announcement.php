<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;

class Announcement extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'title', 'body', 'user_id', 'featureimage', 'url', 'attachment','category'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}

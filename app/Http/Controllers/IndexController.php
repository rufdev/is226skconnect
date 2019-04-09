<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;

class IndexController extends Controller
{
    public function index()
    {
        //Get only three latest blogs for the homepage
        $posts = Post::orderBy('created_at', 'DESC')->take(3)->get();
        return view('index', compact('posts'));
    }
}

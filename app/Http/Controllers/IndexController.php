<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Announcement;
use App\Memo;

class IndexController extends Controller
{
    public function index()
    {
        //Get only three latest blogs for the homepage
        $posts = Post::orderBy('created_at', 'DESC')->take(3)->get();
        $announcements = Announcement::orderBy('created_at', 'DESC')->take(3)->get();
        $memos = Memo::where('category', '=', 'public')->orderBy('created_at', 'DESC')->take(10)->get();
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();

        return view('index', compact('posts', 'announcements' ,'memos' ,'recentposts'));

    }

    public function post($id)
    {
        $post = Post::find($id);
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        return view('post', compact('post','recentposts'));
    }

    public function announcement($id)
    {
        $announcement = Announcement::find($id);
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        return view('announcement', compact('announcement','recentposts'));
    }

    public function memo($id)
    {
        $memo = Memo::find($id);
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        return view('memo', compact('memo','recentposts'));
    }


    public function events()
    {
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        $announcements = Announcement::orderBy('created_at', 'DESC')->get();
        return view('events', compact('announcements','recentposts'));
    }

    public function blog()
    {
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        $posts = Post::orderBy('created_at', 'DESC')->get();
        return view('blog', compact('posts','recentposts'));
    }

    public function about()
    {
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        return view('about', compact('recentposts'));
    }

    public function memos()
    {
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        $memos = Memo::where('category', '=', 'public')->orderBy('created_at', 'DESC')->get();
        return view('memos', compact('memos','recentposts'));
    }

    public function error()
    {
        $recentposts = Post::orderBy('created_at', 'DESC')->take(10)->get();
        return view('errors.404', compact('recentposts'));
    }

}

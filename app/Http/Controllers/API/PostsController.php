<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Post;
class PostsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
        //$this->authorize('isAdmin');
    }
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (\Gate::allows('isAdmin') || \Gate::allows('isSKAdmin')) {
            $posts = Post::with(['user'])->latest()->paginate(5);
        }else{
            $posts = Post::with(['user'])->latest()->where('user_id',auth()->user()->id)->paginate(5);
        }
        return $posts;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request,[
            'title' => 'required|string|max:191|unique:posts',
            'body' => 'required|string',
        ]);
        return Post::create([
            'title' => $request['title'],
            'body' => $request['body'],
            'featureimage'=> $request['featureimage'],
            'user_id' => auth()->user()->id
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // if (\Gate::allows('isAdmin') || \Gate::allows('isSKAdmin') || \Gate::allows('isSKMember')) {
        //     $posts = Post::with(['user'])->latest()->where('user_id',auth()->user()->id)->paginate(5);
        //     return $posts;
        // }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);

        $this->validate($request,[
            'title' => 'required|string|max:191|unique:posts,title,'.$post->id,
            'body' => 'required|string',
        ]);


        $post->update($request->all());

        return ['message' => 'Updated the post info'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $this->authorize('isAdmin');

        $post = Post::findOrFail($id);
        $post->delete();
        return ['message'=>'Post Deleted'];
    }

    public function search(){

        if ($search = \Request::get('q')) {
            $posts = Post::where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")
                        ->orWhere('body','LIKE',"%$search%");
            })->paginate(20);
        }else{
            $posts = Post::latest()->paginate(5);
        }

        return $posts;

    }

    public function count(){
        if (\Gate::allows('isAdmin') || \Gate::allows('isSKAdmin')) {
            $count = Post::count();
        }else{
            $count = Post::where('user_id',auth()->user()->id)->count();
        }
        return $count;
    }

    public function getallpost(){
        $posts = Post::with(['user'])->latest()->paginate(5);
        return $posts;
    }
}

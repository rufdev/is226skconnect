<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Announcement;
class AnnouncementsController extends Controller
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
        if (\Gate::allows('isAdmin') || \Gate::allows('isAuthor')) {
            $announcements = Announcement::with(['user'])->latest()->paginate(5);
            return $announcements;
        }
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
            'title' => 'required|string|max:191|unique:announcements',
            'body' => 'required|string',
            'category' => 'required|string',
        ]);
        return Announcement::create([
            'title' => $request['title'],
            'body' => $request['body'],
            'featureimage'=> $request['featureimage'],
            'url'=> $request['url'],
            'attachment'=> $request['attachment'],
            'category'=> $request['category'],
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
        //
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
        $announcement = Announcement::findOrFail($id);

        $this->validate($request,[
            'title' => 'required|string|max:191|unique:announcements,title,'.$announcement->id,
            'body' => 'required|string',
            'category' => 'required|string',
        ]);


        $announcement->update($request->all());

        return ['message' => 'Updated the announcement info'];
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

        $announcement = Announcement::findOrFail($id);
        $announcement->delete();
        return ['message'=>'Announcement Deleted'];
    }

    public function search(){

        if ($search = \Request::get('q')) {
            $announcements = Announcement::where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")
                        ->orWhere('body','LIKE',"%$search%")
                        ->orWhere('category','LIKE',"%$search%");
            })->paginate(20);
        }else{
            $announcements = Announcement::latest()->paginate(5);
        }

        return $announcements;

    }
    public function count(){
        return Annoucnement::count();
    }
}

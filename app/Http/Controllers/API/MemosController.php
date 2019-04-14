<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Memo;
use App\User;
class MemosController extends Controller
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
            $memos = Memo::with(['user'])->latest()->paginate(5);
        }else{
            $memos = Memo::with(['user'])->latest()->where('user_id',auth()->user()->id)->paginate(5);
        }
        return $memos;
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
            'title' => 'required|string|max:191|unique:memos',
            'body' => 'required|string',
            'category' => 'required|string',
        ]);
        return Memo::create([
            'title' => $request['title'],
            'body' => $request['body'],
            'featureimage'=> $request['featureimage'],
            'url'=> $request['url'],
            'attachment'=> $request['attachment'],
            'category'=> $request['category'],
            'user_id' => auth()->user()->id
        ]);


        if($request['category']=="Private")
        {
            //get users to send to
            $users = User::all();
                //Send to all users
                foreach($users as $user)
                {
                    $title = $request['title'];
                    $content = 'A new memo has been posted for you buddy. Please login to the SK Connect Site';

                    Mail::send('mail', ['title' => $title, 'content' => $content], function ($message)
                    {
                        $message->subject('New Memo');
                        $message->to($user->email);
                    });

                } //end foreach
        }

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
        $memo = Memo::findOrFail($id);

        $this->validate($request,[
            'title' => 'required|string|max:191|unique:memos,title,'.$memo->id,
            'body' => 'required|string',
            'category' => 'required|string',
        ]);


        $memo->update($request->all());

        return ['message' => 'Updated the memo info'];
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

        $memo = Memo::findOrFail($id);
        $memo->delete();
        return ['message'=>'Memo Deleted'];
    }

    public function search(){

        if ($search = \Request::get('q')) {
            $memos = Memo::where(function($query) use ($search){
                $query->where('name','LIKE',"%$search%")
                        ->orWhere('body','LIKE',"%$search%")
                        ->orWhere('category','LIKE',"%$search%");

            })->paginate(20);
        }else{
            $memos = Memo::latest()->paginate(5);
        }

        return $memos;

    }
    public function count(){
        if (\Gate::allows('isAdmin') || \Gate::allows('isSKAdmin')) {
            $count = Memo::count();
        }else{
            $count = Memo::where('user_id',auth()->user()->id)->count();
        }
        return $count;
    }
}

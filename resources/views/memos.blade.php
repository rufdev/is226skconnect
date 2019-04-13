@extends('layouts.app')
@section('title', 'SK Memos')

@section('content')
<div class="container">
<h1> SK Memoranda </h1>

<table>
    @foreach($memos as $memo)
        <tr> <td> <b> Memo Title </b> </td>   <td> <b> Published Date </b></td></tr>
        <tr>
        <td> <a href="/memo/{{ $memo->id }}" target="_blank">{{ $memo->title }} </a> </td>
           <td> {{ $memo->created_at->format('m-d-y') }} </td>
        </tr>

    @endforeach
</table>


<div>
@endsection

@section('footer')
    @include('layouts.footer')
@endsection

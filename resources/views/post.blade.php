@extends('layouts.app')
@section('content')


@section('title', $post->title)
<div class="container">
  <h1>   {{ $post->title }} </h1>
  <h5> Published: {{ $post->created_at->format('m-d-y') }} </h5>
  <img src="{{ url('/img/'.$post->feature_img) }}">
  <p>  {!! $post->body !!} </p>
</div>
<br>

@endsection

@extends('layouts.app')
@section('content')


@section('title', $announcement->title)
<div class="container">
  <h1>   {{ $announcement->title }} </h1>
  <h5> Published: {{ $announcement->created_at->format('m-d-y') }} </h5>

@if($announcement->featureimage <> '')
    <img src="{{ url(''.$announcement->featureimage) }}" style="width:50%; height:50%;">
@else
@endif

  <p>  {!! $announcement->body !!} </p>

  @if($announcement->attachment <> '')
    <p>
        You may download the file here: <a href="{{ $announcement->attachment }}" download> Click here to download </a>
    </p>
  @else
        <p> </p>
  @endif

</div>
<br>

@endsection

@section('footer')
    @include('layouts.footer')
@endsection

@extends('layouts.app')
@section('content')


@section('title', $memo->title)
<div class="container">
  <h1>   {{ $memo->title }} </h1>
  <h5> Published: {{ $memo->created_at->format('m-d-y') }} </h5>

  @if($memo->featureimage <> '')
      <img src="{{ url(''.$memo->featureimage) }}" style="width:50%; height:50%;">
  @else
  @endif

  <p>  {!! $memo->body !!} </p>

  @if($memo->attachment <> '')
    <p>
        You may download the file here: <a href="{{ $memo->attachment }}" download> Click here to download </a>
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

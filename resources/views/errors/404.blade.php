@extends('layouts.app')

@section('title', 'Page Not Found')
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,700" rel="stylesheet">
<link type="text/css" rel="stylesheet" href="/css/404style.css" />


@section('content')

<div class="container">
    <div id="notfound">
        <div class="notfound">
            <div class="notfound-404">
                <h1>4<span></span>4</h1>
            </div>
            <h2>Oops! Page Not Be Found</h2>
                <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
                <a href="/">Back to homepage</a>
        </div>
    </div>
</div>

@endsection

@section('footer')
    @include('layouts.footer')
@endsection

@extends('layouts.app')
@section('content')


@section('title', 'Downloads')
<div class="container">

    <h1> Downloads </h1>

        <table>
            @foreach($downloads as $download)
                <tr> <td> <b> File </b> </td>   <td> <b> Published Date </b></td></tr>
                <tr>
                <td> <a href="/memo/{{ $download->id }}" target="_blank">{{ $download->title }} </a> </td>
                   <td> {{ $download->created_at->format('m-d-y') }} </td>
                </tr>

            @endforeach
        </table>

</div>
<br>

@endsection

@section('footer')
    @include('layouts.footer')
@endsection

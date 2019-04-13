@extends('layouts.app')
@section('title', 'Events/Announcements')

@section('content')
<div class="container">

        <section class="tg-sectionspace tg-haslayout">
                <div class="tg-borderheading">
                   <h2><hr>Announcements/Events</hr></h2>
                </div>
                <div class="tg-events">
                  @foreach ($announcements as $announcement)
                   <article class="tg-themepost tg-themepostleftimg">
                      <figure class="tg-featuredimg">
                              <a href="/announce/{{ $announcement->id }}">
                              <img src="{{ url(''.$announcement->featureimage) }}" alt="" style="width:275px; height:183px;"> </a>
                      </figure>
                      <div class="tg-themepostcontent">
                      <h3><a href="/announce/{{ $announcement->id }}"> {{ $announcement->title }}</a></h3>
                         <div> <p style="font-size: 12pt!important"> {!! str_limit($announcement->body, 100) !!} </p> </div>
                         <div class="tg-btnsbox">
                            <a class="tg-btn" href="/announce/{{ $announcement->id }}">Read More</a>
                         </div>
                      </div>
                   </article>
                   @endforeach
                   <div class="clearfix"></div>
             </section>
<div>
@endsection

@section('footer')
    @include('layouts.footer')
@endsection

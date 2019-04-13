@extends('layouts.app')
@section('title', 'Blog')

@section('content')
<div class="container">

        <section class="tg-sectionspace tg-haslayout">
                <div class="tg-borderheading">
                   <h2><hr>Blog</hr></h2>
                </div>
                <div class="tg-events">
                  @foreach ($posts as $post)
                   <article class="tg-themepost tg-themepostleftimg">
                      <figure class="tg-featuredimg">
                              <a href="/announce/{{ $post->id }}">
                              <img src="{{ url(''.$post->featureimage) }}" alt="" style="width:275px; height:183px;"> </a>
                      </figure>
                      <div class="tg-themepostcontent">
                      <h3><a href="/announce/{{ $post->id }}"> {{ $post->title }}</a></h3>
                         <div> <p style="font-size: 12pt!important"> {!! str_limit($post->body, 100) !!} </p> </div>
                         <div class="tg-btnsbox">
                            <a class="tg-btn" href="/announce/{{ $post->id }}">Read More</a>
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

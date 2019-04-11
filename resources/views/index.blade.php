@extends('layouts.app')

@section('title', 'Home')

@section('content')

    @include('layouts.slider')

         <main id="tg-main" class="tg-main tg-haslayout">
            <div class="container">
               <div class="row">
                  <div id="tg-twocolumns" class="tg-twocolumns">
                     <div class="col-xs-12 col-sm-8 col-md-9 col-lg-9">
                        <div id="tg-content" class="tg-content">
                           <section class="tg-sectionspace tg-haslayout">
                              <div class="tg-shortcode tg-welcomeandgreeting">
                                 <figure>
                                    <img src="http://52.220.57.1/themes/skconnect/assets/images/thePresident.jpg" alt="Rodrigo Duterte">
                                 </figure>
                                 <div class="tg-shortcodetextbox">
                                    <h2>Mabuhay SK Federation of Antipolo</h2>
                                    <div class="tg-description">
                                       <p align="justify">
                                          I will always do everything to protect the next generation.
                                          We will continue our unrelenting efforts to purge corruption, criminality, illegal drugs and terrorism.
                                          As we protect our children from these menaces, we will also prepare them for the crucial task of building on our past gains.
                                          As I encourage our youth to dream big and aspire for greatness, not just for themselves but for the entire nation,
                                          I also challenge my fellow adults to allow our youth to play a role in shaping a future that our children deserve to inherit.
                                       </p>
                                    </div>
                                    <span class="tg-name">Rodrigo Duterte</span>
                                    <span class="tg-designation">President, Republic of the Philippines</span>
                                 </div>
                              </div>
                           </section>
                           <section class="tg-sectionspace tg-haslayout">
                              <div class="tg-borderheading">
                                 <h2>Latest Announcements/Events</h2>
                              </div>
                              <div class="tg-events">
                                 <article class="tg-themepost tg-themepostleftimg">
                                    <figure class="tg-featuredimg">
                                       <a href="http://52.220.57.1/blog/post:slug">
                                       <img src="http://52.220.57.1/storage/app/uploads/public/5c9/4d9/5e0/5c94d95e0c735965750170.jpg" alt="" style="width:275px; height:183px;"> </a>
                                       </a>
                                    </figure>
                                    <div class="tg-themepostcontent">
                                       <h3><a href="http://52.220.57.1/blog/post:slug">Welcome to SK!</a></h3>
                                       sawadee
                                       <div class="tg-btnsbox">
                                          <a class="tg-btn" href="">read more</a>
                                       </div>
                                    </div>
                                 </article>
                                 <div class="clearfix"></div>
                           </section>
                           <section class="tg-sectionspace tg-haslayout">
                                <div class="tg-latestnews">
                                <div class="tg-borderheading">
                                <h2>Latest Blogs for Inspiration</h2>
                                </div>
                                <div class="row">
                                <ul class="small-grid">

                                @foreach ($posts as $post)
                                    <li class="col-md-4 col-sm-3" style="list-style: none; overflow:hidden;">
                                    <div class="small-post" >
                                        <figure class="tg-featuredimg">
                                            <a href="">
                                            <img src="{{ url('/img/'.$post->feature_img) }}" alt="" style="width:275px; height:183px;"> </a>
                                        </figure>
                                        <div class="cp-post-content">
                                        <h3><a href="">{{ $post->title}}</a></h3>
                                        <div> {!! str_limit($post->body, 100) !!} </div>
                                        <a href="/post/{{ $post->id }}">Read More...</a>
                                        </div>
                                    </div>
                                    </li>
                                @endforeach

                                <div class="tg-btnsbox">
                                <a class="tg-btn" href="/blog">view all blogs</a>
                                </div>
                                </div>
                           </section>
                        </div>
                    </div>

                    @include('layouts.sidebar')

@endsection

@section('footer')
    @include('layouts.footer')
@endsection

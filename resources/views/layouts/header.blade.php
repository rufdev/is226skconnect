<!--************************************
            Header Start
*************************************-->
<div id="tg-wrapper" class="tg-wrapper">
<header id="tg-header" class="tg-header tg-haslayout">
     <div class="clearfix"></div>
        <div class="container">
            <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div>
                           <strong class="tg-logo"><a href="/"><img src="{{ url('/img/sklogoheader.png') }}" alt="SK Connect" style="width: 25%; height: 15%;"></a></strong>
                        </div>
                        <div class="tg-navigationarea">
                           <nav id="tg-nav" class="tg-nav">
                              <div class="navbar-header">
                                 <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                 <span class="sr-only">Toggle navigation</span>
                                 <span class="icon-bar"></span>
                                 <span class="icon-bar"></span>
                                 <span class="icon-bar"></span>
                                 </button>
                              </div>
                              <div id="tg-navigation" class="collapse navbar-collapse tg-navigation">
                                 <ul>
                                    <li class="menu-item"><a href="/">Home</a></li>
                                    <li><a href="/about">About Us</a></li>
                                    <li class="menu-item">
                                       <a href="/events">Events</a>
                                    </li>
                                    <li class="menu-item">
                                       <a href="/blog">Blog</a>
                                    </li>
                                    <li class="menu-item"><a href="/memos">Memos</a></li>
                                    <li class="menu-item"><a href="#contact">Contact</a></li>

                                    @if(Auth::check())
                                        <li class="menu-item"><a href="/dashboard">My Dashboard</a></li>
                                    @else
                                       <li class="menu-item"><a href="{{ route('login') }}">Login</a></li>

                                    @endif
                                    </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>
<!--************************************
        Header End
*************************************-->

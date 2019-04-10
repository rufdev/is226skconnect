<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>SK Connect System - @yield('title')</title>
      <meta name="description" content="">
      <meta name="title" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/png" href="{{ URL::asset('img/sklogo.png') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/bootstrap.min.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/normalize.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/font-awesome.min.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/icomoon.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/animate.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/prettyPhoto.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/owl.carousel.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/owl.theme.default.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/transitions.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/main.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/color.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/responsive.css') }}">
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
      <link rel="stylesheet" href="{{ URL::asset('css/quotes.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/sliderstyle.css') }}">

   </head>
   <body>

    @include('layouts.header')

    <!--************************************
                Content Start
    *************************************-->

    @yield('content')
        </div>
        </div>
        </div>
        </div>
        </main>

    <!--************************************
                Content End
    *************************************-->

    @yield('footer')

    <div id="fb-root"></div>
    <!-- Scripts -->
      <script src="{{ URL::asset('js/modernizr-2.8.3-respond-1.4.2.min.js') }}"></script>
      <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
      <script src="{{ URL::asset('js/jssor.slider.min.js') }}"></script>
      <script src="{{ URL::asset('js/jquery-library.js)') }}"></script>
      <script src="{{ URL::asset('js/bootstrap.min.js') }}"></script>
      <script src="{{ URL::asset('js/owl.carousel.min.js') }}"></script>
      <script src="{{ URL::asset('jsjs/isotope.pkgd.js') }}"></script>
      <script src="{{ URL::asset('js/prettyPhoto.js') }}"></script>
      <script src="{{ URL::asset('js/countdown.js') }}"></script>
      <script src="{{ URL::asset('js/collapse.js') }}"></script>
      <script src="{{ URL::asset('js/moment.js') }}"></script>
      <script src="{{ URL::asset('jsjs/main.js') }}"></script>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=1554820474822918&autoLogAppEvents=1"></script>
   </body>
</html>

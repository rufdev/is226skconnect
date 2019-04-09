<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>SK Connect System - </title>
      <meta name="description" content="">
      <meta name="title" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="icon" type="image/png" href="http://127.0.0.1:8000/img/sklogo.png">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/bootstrap.min.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/normalize.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/font-awesome.min.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/icomoon.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/animate.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/prettyPhoto.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/owl.carousel.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/owl.theme.default.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/transitions.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/main.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/color.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/responsive.css">
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css">
      <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/quotes.css">
      <link rel="stylesheet" href="http://127.0.0.1:8000/css/sliderstyle.css">

   </head>
   <body>

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
                           <strong class="tg-logo"><a href="/"><img src="http://52.220.57.1/themes/skconnect/assets/images/sklogosite.PNG" alt="SK Connect" style="width: 25%; height: 15%;"></a></strong>
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
                                    <li class="menu-item"><a href="">Home</a></li>
                                    <li><a href="">About Us</a></li>
                                    <li class="menu-item">
                                       <a href="">Events</a>
                                    </li>
                                    <li class="menu-item-has-children">
                                       <a href="">Blog</a>
                                       <ul class="sub-menu">
                                          <li><a href="">Blog</a></li>
                                          <li><a href="">Blog detail</a></li>
                                       </ul>
                                    </li>
                                    <li class="menu-item"><a href="">Downloads</a></li>
                                    <li class="menu-item"><a href="">Contact</a></li>
                                    <li class="menu-item"><a class="btn btn-primary"  role="button" href="">Login</a></li>
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
    <!--************************************
                Content Start
    *************************************-->

    <div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>

                <div class="card-body">
                    <form method="POST" action="http://127.0.0.1:8000/login">
                        <input type="hidden" name="_token" value="B6Ph72TTFB3s2IqzUzz244C3MRvUmFZSJqliis1w">
                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" type="email" class="form-control" name="email" value="" required autofocus>

                                                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                            <div class="col-md-6">
                                <input id="password" type="password" class="form-control" name="password" required>

                                                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" >

                                    <label class="form-check-label" for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>

                                                                    <a class="btn btn-link" href="http://127.0.0.1:8000/password/reset">
                                        Forgot Your Password?
                                    </a>
                                                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
        </div>
        <!--************************************
         Sidebar Start
*************************************-->
<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <aside id="tg-sidebar" class="tg-sidebar">
       <div class="tg-widget">
          <div class="tg-widgetcontent">
             <form class="tg-formtheme tg-formsearch" action="http://52.220.57.1/search-results" method="get">
                <fieldset>
                   <input type="search" name="q" class="form-control" placeholder="What are you looking for?">
                   <button type="submit" class="tg-btnsearch"><i class="icon-magnifier"></i></button>
                </fieldset>
             </form>
          </div>
       </div>
       <div class="tg-widget tg-widgetnoticeboard">
          <div class="tg-widgettitle">
             <h3><b>Notice Board</b></h3>
          </div>
          <div class="tg-widgetcontent">
             <ul>
                <li>
                   <a href="">Adipisicing elit sed dotas eiusmod tempor incididunt utae labore etiat dolore magna aliqua enim ad minim veniam.</a>
                </li>
                <li>
                   <a href="">Labore etiat dolore magna aliqua enim ad minim veniam.</a>
                </li>
                <li>
                   <a href="">Duis aute irure dolor in reprehenderit.</a>
                </li>
             </ul>
          </div>
       </div>
       <div class="tg-widget tg-widgetadmissionform">
          <div class="tg-widgetcontent">
             <h3><b>What is SK?</b></h3>
             <div class="tg-description">
                <p>Watch the informative video below about us:</p>
             </div>
             <iframe width="300" height="200" src="https://www.youtube.com/embed/-KMEf6-zMUA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
       </div>
       <div class="tg-widget tg-widgetdownload">
          <div class="tg-widgettitle">
             <h3><b>Downloads</b></h3>
          </div>
          <div class="tg-widgetcontent">
             <ul>
                <li>
                   <a href="">
                   <i class="fa fa-paperclip"></i>
                   <span>Prospectus</span>
                   </a>
                </li>
                <li>
                   <a href="">
                   <i class="fa fa-map-signs"></i>
                   <span>Admission Guide</span>
                   </a>
                </li>
                <li>
                   <a href="">
                   <i class="fa fa-list-ul"></i>
                   <span>Merit List 2017</span>
                   </a>
                </li>
                <li>
                   <a href="">
                   <i class="fa fa-calendar-check-o "></i>
                   <span>Examination Date Sheet</span>
                   </a>
                </li>
                <li>
                   <a href="">
                   <i class="fa fa-bookmark-o"></i>
                   <span>Examination Guide 2017</span>
                   </a>
                </li>
             </ul>
          </div>
       </div>
    </aside>
 </div>
<!--************************************
         Sidebar End
*************************************-->        </div>
        </div>
        </div>
        </div>
        </main>

    <!--************************************
                Content End
    *************************************-->

    <!--************************************
         Footer Start
*************************************-->
         <footer id="tg-footer" class="tg-footer tg-haslayout">
            <div class="tg-signupbox">
               <div class="container">
                  <div class="tg-signuptextbox">
                     <h3>Free Signup!</h3>
                     <div class="tg-description">
                        <p>Subscribe Monthly Newsletter &amp; Get Latest New &amp; Updates.</p>
                     </div>
                  </div>
                  <form class="tg-formtheme tg-formsignupfree">
                     <fieldset>
                        <div class="form-group"><input type="text" name="emailid" class="form-control" placeholder="Enter Email ID"></div>
                        <div class="form-group"><button type="submit" class="tg-btn">Signup Now</button></div>
                     </fieldset>
                  </form>
               </div>
            </div>
            <div class="tg-footermiddlebar">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="tg-widget tg-widgetcompanyinfo">
                           <div class="tg-widgetcontent">
                              <strong class="tg-logo">Contact Us</strong>
                              <div class="tg-description">
                                 <p>You may contact us in the following details below:</p>
                              </div>
                              <ul class="tg-infolist">
                                 <li>
                                    <i class="icon-location"></i>
                                    <address>Abc, xyz street London, HG521A</address>
                                 </li>
                                 <li>
                                    <i class="icon-phone-handset"></i>
                                    <span>0800 - 1234 - 562 - 6</span>
                                 </li>
                                 <li>
                                    <i class="icon-printer"></i>
                                    <span>+4 1234 567 - 9</span>
                                 </li>
                                 <li>
                                    <a href="mailto:query@domain.com">
                                    <i class="icon-envelope"></i>
                                    <span>query@domain.com</span>
                                    </a>
                                 </li>
                              </ul>
                              <ul class="tg-socialicons">
                                 <li class="tg-facebook"><a href=""><i class="fa fa-facebook"></i></a></li>
                                 <li class="tg-twitter"><a href=""><i class="fa fa-twitter"></i></a></li>
                                 <li class="tg-linkedin"><a href=""><i class="fa fa-linkedin"></i></a></li>
                                 <li class="tg-googleplus"><a href=""><i class="fa fa-google-plus"></i></a></li>
                                 <li class="tg-rss"><a href=""><i class="fa fa-rss"></i></a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="tg-widget tg-widgettweets">
                           <div class="tg-widgettitle">
                              <h3>Latest Tweets</h3>
                           </div>
                           <div class="tg-widgetcontent">
                              <a class="twitter-timeline" data-lang="en" data-width="300" data-height="200" data-dnt="true" data-theme="light" href="https://twitter.com/AntipoloCityGov?ref_src=twsrc%5Etfw">Tweets by AntipoloCityGov</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                           </div>
                        </div>
                     </div>
                     <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="tg-widget tg-widgetcoursecategories">
                           <div class="tg-widgettitle">
                              <h3>Course Categories</h3>
                           </div>
                           <div class="tg-widgetcontent">
                              <ul>
                                 <li><a href="">Perspiciatis ate</a></li>
                                 <li><a href="">Aomnis isteat</a></li>
                                 <li><a href="">Canatus error</a></li>
                                 <li><a href="">Voluptatem clu</a></li>
                                 <li><a href="">Commodo</a></li>
                                 <li><a href="">Consequat</a></li>
                                 <li><a href="">Duis aute</a></li>
                                 <li><a href="">Aincididunt</a></li>
                                 <li><a href="">Alter veritatis</a></li>
                                 <li><a href="">Tempora Incid</a></li>
                                 <li><a href="">Dolore Magnam</a></li>
                                 <li><a href="">Aliquam Quaerat</a></li>
                                 <li><a href="">Quisquam</a></li>
                                 <li><a href="">Voluptatem</a></li>
                                 <li><a href="">Aliquip</a></li>
                                 <li><a href="">Adipisicing</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                     <div class="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                        <div class="tg-widget tg-widgetcoursecategories">
                           <div class="tg-widgettitle">
                              <h3>Follow us on Facebook</h3>
                           </div>
                           <div class="tg-widgetcontent">
                              <div class="fb-page" data-href="https://www.facebook.com/AntipoloCityYouth/" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                                 <blockquote cite="https://www.facebook.com/AntipoloCityYouth/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/AntipoloCityYouth/">Antipolo Youth</a></blockquote>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="tg-footerbar">
               <div class="container">
                  <div class="row">
                     <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <span class="tg-copyright">Copyright &copy; 2019
                        SK Federation of Antipolo City Government. All Rights Reserved</span>
                        <nav class="tg-addnav">
                           <ul>
                              <li><a href="">Privacy Policy</a></li>
                              <li><a href="">Term and Conditions</a></li>
                              <li><a href="">Contact</a></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
<!--************************************
Footer End
*************************************-->
    <div id="fb-root"></div>
    <!-- Scripts -->
      <script src="http://127.0.0.1:8000/js/modernizr-2.8.3-respond-1.4.2.min.js"></script>
      <script src="//code.jquery.com/jquery-2.1.3.min.js"></script>
      <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
      <script src="http://127.0.0.1:8000/js/jssor.slider.min.js"></script>
      <script src="http://127.0.0.1:8000/js/jquery-library.js)"></script>
      <script src="http://127.0.0.1:8000/js/bootstrap.min.js"></script>
      <script src="http://127.0.0.1:8000/js/owl.carousel.min.js"></script>
      <script src="http://127.0.0.1:8000/jsjs/isotope.pkgd.js"></script>
      <script src="http://127.0.0.1:8000/js/prettyPhoto.js"></script>
      <script src="http://127.0.0.1:8000/js/countdown.js"></script>
      <script src="http://127.0.0.1:8000/js/collapse.js"></script>
      <script src="http://127.0.0.1:8000/js/moment.js"></script>
      <script src="http://127.0.0.1:8000/jsjs/main.js"></script>
      <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=1554820474822918&autoLogAppEvents=1"></script>
   <link rel='stylesheet' type='text/css' property='stylesheet' href='//127.0.0.1:8000/_debugbar/assets/stylesheets?v=1551204114'><script type='text/javascript' src='//127.0.0.1:8000/_debugbar/assets/javascript?v=1551204114'></script><script type="text/javascript">jQuery.noConflict(true);</script>
<script> Sfdump = window.Sfdump || (function (doc) { var refStyle = doc.createElement('style'), rxEsc = /([.*+?^${}()|\[\]\/\\])/g, idRx = /\bsf-dump-\d+-ref[012]\w+\b/, keyHint = 0 <= navigator.platform.toUpperCase().indexOf('MAC') ? 'Cmd' : 'Ctrl', addEventListener = function (e, n, cb) { e.addEventListener(n, cb, false); }; (doc.documentElement.firstElementChild || doc.documentElement.children[0]).appendChild(refStyle); if (!doc.addEventListener) { addEventListener = function (element, eventName, callback) { element.attachEvent('on' + eventName, function (e) { e.preventDefault = function () {e.returnValue = false;}; e.target = e.srcElement; callback(e); }); }; } function toggle(a, recursive) { var s = a.nextSibling || {}, oldClass = s.className, arrow, newClass; if (/\bsf-dump-compact\b/.test(oldClass)) { arrow = '▼'; newClass = 'sf-dump-expanded'; } else if (/\bsf-dump-expanded\b/.test(oldClass)) { arrow = '▶'; newClass = 'sf-dump-compact'; } else { return false; } if (doc.createEvent && s.dispatchEvent) { var event = doc.createEvent('Event'); event.initEvent('sf-dump-expanded' === newClass ? 'sfbeforedumpexpand' : 'sfbeforedumpcollapse', true, false); s.dispatchEvent(event); } a.lastChild.innerHTML = arrow; s.className = s.className.replace(/\bsf-dump-(compact|expanded)\b/, newClass); if (recursive) { try { a = s.querySelectorAll('.'+oldClass); for (s = 0; s < a.length; ++s) { if (-1 == a[s].className.indexOf(newClass)) { a[s].className = newClass; a[s].previousSibling.lastChild.innerHTML = arrow; } } } catch (e) { } } return true; }; function collapse(a, recursive) { var s = a.nextSibling || {}, oldClass = s.className; if (/\bsf-dump-expanded\b/.test(oldClass)) { toggle(a, recursive); return true; } return false; }; function expand(a, recursive) { var s = a.nextSibling || {}, oldClass = s.className; if (/\bsf-dump-compact\b/.test(oldClass)) { toggle(a, recursive); return true; } return false; }; function collapseAll(root) { var a = root.querySelector('a.sf-dump-toggle'); if (a) { collapse(a, true); expand(a); return true; } return false; } function reveal(node) { var previous, parents = []; while ((node = node.parentNode || {}) && (previous = node.previousSibling) && 'A' === previous.tagName) { parents.push(previous); } if (0 !== parents.length) { parents.forEach(function (parent) { expand(parent); }); return true; } return false; } function highlight(root, activeNode, nodes) { resetHighlightedNodes(root); Array.from(nodes||[]).forEach(function (node) { if (!/\bsf-dump-highlight\b/.test(node.className)) { node.className = node.className + ' sf-dump-highlight'; } }); if (!/\bsf-dump-highlight-active\b/.test(activeNode.className)) { activeNode.className = activeNode.className + ' sf-dump-highlight-active'; } } function resetHighlightedNodes(root) { Array.from(root.querySelectorAll('.sf-dump-str, .sf-dump-key, .sf-dump-public, .sf-dump-protected, .sf-dump-private')).forEach(function (strNode) { strNode.className = strNode.className.replace(/\bsf-dump-highlight\b/, ''); strNode.className = strNode.className.replace(/\bsf-dump-highlight-active\b/, ''); }); } return function (root, x) { root = doc.getElementById(root); var indentRx = new RegExp('^('+(root.getAttribute('data-indent-pad') || ' ').replace(rxEsc, '\\$1')+')+', 'm'), options = {"maxDepth":1,"maxStringLength":160,"fileLinkFormat":false}, elt = root.getElementsByTagName('A'), len = elt.length, i = 0, s, h, t = []; while (i < len) t.push(elt[i++]); for (i in x) { options[i] = x[i]; } function a(e, f) { addEventListener(root, e, function (e) { if ('A' == e.target.tagName) { f(e.target, e); } else if ('A' == e.target.parentNode.tagName) { f(e.target.parentNode, e); } else if (e.target.nextElementSibling && 'A' == e.target.nextElementSibling.tagName) { f(e.target.nextElementSibling, e, true); } }); }; function isCtrlKey(e) { return e.ctrlKey || e.metaKey; } function xpathString(str) { var parts = str.match(/[^'"]+|['"]/g).map(function (part) { if ("'" == part) { return '"\'"'; } if ('"' == part) { return "'\"'"; } return "'" + part + "'"; }); return "concat(" + parts.join(",") + ", '')"; } function xpathHasClass(className) { return "contains(concat(' ', normalize-space(@class), ' '), ' " + className +" ')"; } addEventListener(root, 'mouseover', function (e) { if ('' != refStyle.innerHTML) { refStyle.innerHTML = ''; } }); a('mouseover', function (a, e, c) { if (c) { e.target.style.cursor = "pointer"; } else if (a = idRx.exec(a.className)) { try { refStyle.innerHTML = '.phpdebugbar pre.sf-dump .'+a[0]+'{background-color: #B729D9; color: #FFF !important; border-radius: 2px}'; } catch (e) { } } }); a('click', function (a, e, c) { if (/\bsf-dump-toggle\b/.test(a.className)) { e.preventDefault(); if (!toggle(a, isCtrlKey(e))) { var r = doc.getElementById(a.getAttribute('href').substr(1)), s = r.previousSibling, f = r.parentNode, t = a.parentNode; t.replaceChild(r, a); f.replaceChild(a, s); t.insertBefore(s, r); f = f.firstChild.nodeValue.match(indentRx); t = t.firstChild.nodeValue.match(indentRx); if (f && t && f[0] !== t[0]) { r.innerHTML = r.innerHTML.replace(new RegExp('^'+f[0].replace(rxEsc, '\\$1'), 'mg'), t[0]); } if (/\bsf-dump-compact\b/.test(r.className)) { toggle(s, isCtrlKey(e)); } } if (c) { } else if (doc.getSelection) { try { doc.getSelection().removeAllRanges(); } catch (e) { doc.getSelection().empty(); } } else { doc.selection.empty(); } } else if (/\bsf-dump-str-toggle\b/.test(a.className)) { e.preventDefault(); e = a.parentNode.parentNode; e.className = e.className.replace(/\bsf-dump-str-(expand|collapse)\b/, a.parentNode.className); } }); elt = root.getElementsByTagName('SAMP'); len = elt.length; i = 0; while (i < len) t.push(elt[i++]); len = t.length; for (i = 0; i < len; ++i) { elt = t[i]; if ('SAMP' == elt.tagName) { a = elt.previousSibling || {}; if ('A' != a.tagName) { a = doc.createElement('A'); a.className = 'sf-dump-ref'; elt.parentNode.insertBefore(a, elt); } else { a.innerHTML += ' '; } a.title = (a.title ? a.title+'\n[' : '[')+keyHint+'+click] Expand all children'; a.innerHTML += '<span>▼</span>'; a.className += ' sf-dump-toggle'; x = 1; if ('sf-dump' != elt.parentNode.className) { x += elt.parentNode.getAttribute('data-depth')/1; } elt.setAttribute('data-depth', x); var className = elt.className; elt.className = 'sf-dump-expanded'; if (className ? 'sf-dump-expanded' !== className : (x > options.maxDepth)) { toggle(a); } } else if (/\bsf-dump-ref\b/.test(elt.className) && (a = elt.getAttribute('href'))) { a = a.substr(1); elt.className += ' '+a; if (/[\[{]$/.test(elt.previousSibling.nodeValue)) { a = a != elt.nextSibling.id && doc.getElementById(a); try { s = a.nextSibling; elt.appendChild(a); s.parentNode.insertBefore(a, s); if (/^[@#]/.test(elt.innerHTML)) { elt.innerHTML += ' <span>▶</span>'; } else { elt.innerHTML = '<span>▶</span>'; elt.className = 'sf-dump-ref'; } elt.className += ' sf-dump-toggle'; } catch (e) { if ('&' == elt.innerHTML.charAt(0)) { elt.innerHTML = '…'; elt.className = 'sf-dump-ref'; } } } } } if (doc.evaluate && Array.from && root.children.length > 1) { root.setAttribute('tabindex', 0); SearchState = function () { this.nodes = []; this.idx = 0; }; SearchState.prototype = { next: function () { if (this.isEmpty()) { return this.current(); } this.idx = this.idx < (this.nodes.length - 1) ? this.idx + 1 : 0; return this.current(); }, previous: function () { if (this.isEmpty()) { return this.current(); } this.idx = this.idx > 0 ? this.idx - 1 : (this.nodes.length - 1); return this.current(); }, isEmpty: function () { return 0 === this.count(); }, current: function () { if (this.isEmpty()) { return null; } return this.nodes[this.idx]; }, reset: function () { this.nodes = []; this.idx = 0; }, count: function () { return this.nodes.length; }, }; function showCurrent(state) { var currentNode = state.current(), currentRect, searchRect; if (currentNode) { reveal(currentNode); highlight(root, currentNode, state.nodes); if ('scrollIntoView' in currentNode) { currentNode.scrollIntoView(true); currentRect = currentNode.getBoundingClientRect(); searchRect = search.getBoundingClientRect(); if (currentRect.top < (searchRect.top + searchRect.height)) { window.scrollBy(0, -(searchRect.top + searchRect.height + 5)); } } } counter.textContent = (state.isEmpty() ? 0 : state.idx + 1) + ' of ' + state.count(); } var search = doc.createElement('div'); search.className = 'sf-dump-search-wrapper sf-dump-search-hidden'; search.innerHTML = ' <input type="text" class="sf-dump-search-input"> <span class="sf-dump-search-count">0 of 0<\/span> <button type="button" class="sf-dump-search-input-previous" tabindex="-1"> <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1683 1331l-166 165q-19 19-45 19t-45-19l-531-531-531 531q-19 19-45 19t-45-19l-166-165q-19-19-19-45.5t19-45.5l742-741q19-19 45-19t45 19l742 741q19 19 19 45.5t-19 45.5z"\/> <\/svg> <\/button> <button type="button" class="sf-dump-search-input-next" tabindex="-1"> <svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"\/> <\/svg> <\/button> '; root.insertBefore(search, root.firstChild); var state = new SearchState(); var searchInput = search.querySelector('.sf-dump-search-input'); var counter = search.querySelector('.sf-dump-search-count'); var searchInputTimer = 0; var previousSearchQuery = ''; addEventListener(searchInput, 'keyup', function (e) { var searchQuery = e.target.value; /* Don't perform anything if the pressed key didn't change the query */ if (searchQuery === previousSearchQuery) { return; } previousSearchQuery = searchQuery; clearTimeout(searchInputTimer); searchInputTimer = setTimeout(function () { state.reset(); collapseAll(root); resetHighlightedNodes(root); if ('' === searchQuery) { counter.textContent = '0 of 0'; return; } var classMatches = [ "sf-dump-str", "sf-dump-key", "sf-dump-public", "sf-dump-protected", "sf-dump-private", ].map(xpathHasClass).join(' or '); var xpathResult = doc.evaluate('.//span[' + classMatches + '][contains(translate(child::text(), ' + xpathString(searchQuery.toUpperCase()) + ', ' + xpathString(searchQuery.toLowerCase()) + '), ' + xpathString(searchQuery.toLowerCase()) + ')]', root, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null); while (node = xpathResult.iterateNext()) state.nodes.push(node); showCurrent(state); }, 400); }); Array.from(search.querySelectorAll('.sf-dump-search-input-next, .sf-dump-search-input-previous')).forEach(function (btn) { addEventListener(btn, 'click', function (e) { e.preventDefault(); -1 !== e.target.className.indexOf('next') ? state.next() : state.previous(); searchInput.focus(); collapseAll(root); showCurrent(state); }) }); addEventListener(root, 'keydown', function (e) { var isSearchActive = !/\bsf-dump-search-hidden\b/.test(search.className); if ((114 === e.keyCode && !isSearchActive) || (isCtrlKey(e) && 70 === e.keyCode)) { /* F3 or CMD/CTRL + F */ e.preventDefault(); search.className = search.className.replace(/\bsf-dump-search-hidden\b/, ''); searchInput.focus(); } else if (isSearchActive) { if (27 === e.keyCode) { /* ESC key */ search.className += ' sf-dump-search-hidden'; e.preventDefault(); resetHighlightedNodes(root); searchInput.value = ''; } else if ( (isCtrlKey(e) && 71 === e.keyCode) /* CMD/CTRL + G */ || 13 === e.keyCode /* Enter */ || 114 === e.keyCode /* F3 */ ) { e.preventDefault(); e.shiftKey ? state.previous() : state.next(); collapseAll(root); showCurrent(state); } } }); } if (0 >= options.maxStringLength) { return; } try { elt = root.querySelectorAll('.sf-dump-str'); len = elt.length; i = 0; t = []; while (i < len) t.push(elt[i++]); len = t.length; for (i = 0; i < len; ++i) { elt = t[i]; s = elt.innerText || elt.textContent; x = s.length - options.maxStringLength; if (0 < x) { h = elt.innerHTML; elt[elt.innerText ? 'innerText' : 'textContent'] = s.substring(0, options.maxStringLength); elt.className += ' sf-dump-str-collapse'; elt.innerHTML = '<span class=sf-dump-str-collapse>'+h+'<a class="sf-dump-ref sf-dump-str-toggle" title="Collapse"> ◀</a></span>'+ '<span class=sf-dump-str-expand>'+elt.innerHTML+'<a class="sf-dump-ref sf-dump-str-toggle" title="'+x+' remaining characters"> ▶</a></span>'; } } } catch (e) { } }; })(document); </script><style> .phpdebugbar pre.sf-dump { display: block; white-space: pre; padding: 5px; overflow: initial !important; } .phpdebugbar pre.sf-dump:after { content: ""; visibility: hidden; display: block; height: 0; clear: both; } .phpdebugbar pre.sf-dump span { display: inline; } .phpdebugbar pre.sf-dump .sf-dump-compact { display: none; } .phpdebugbar pre.sf-dump abbr { text-decoration: none; border: none; cursor: help; } .phpdebugbar pre.sf-dump a { text-decoration: none; cursor: pointer; border: 0; outline: none; color: inherit; } .phpdebugbar pre.sf-dump .sf-dump-ellipsis { display: inline-block; overflow: visible; text-overflow: ellipsis; max-width: 5em; white-space: nowrap; overflow: hidden; vertical-align: top; } .phpdebugbar pre.sf-dump .sf-dump-ellipsis+.sf-dump-ellipsis { max-width: none; } .phpdebugbar pre.sf-dump code { display:inline; padding:0; background:none; } .sf-dump-str-collapse .sf-dump-str-collapse { display: none; } .sf-dump-str-expand .sf-dump-str-expand { display: none; } .sf-dump-public.sf-dump-highlight, .sf-dump-protected.sf-dump-highlight, .sf-dump-private.sf-dump-highlight, .sf-dump-str.sf-dump-highlight, .sf-dump-key.sf-dump-highlight { background: rgba(111, 172, 204, 0.3); border: 1px solid #7DA0B1; border-radius: 3px; } .sf-dump-public.sf-dump-highlight-active, .sf-dump-protected.sf-dump-highlight-active, .sf-dump-private.sf-dump-highlight-active, .sf-dump-str.sf-dump-highlight-active, .sf-dump-key.sf-dump-highlight-active { background: rgba(253, 175, 0, 0.4); border: 1px solid #ffa500; border-radius: 3px; } .phpdebugbar pre.sf-dump .sf-dump-search-hidden { display: none !important; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper { font-size: 0; white-space: nowrap; margin-bottom: 5px; display: flex; position: -webkit-sticky; position: sticky; top: 5px; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > * { vertical-align: top; box-sizing: border-box; height: 21px; font-weight: normal; border-radius: 0; background: #FFF; color: #757575; border: 1px solid #BBB; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > input.sf-dump-search-input { padding: 3px; height: 21px; font-size: 12px; border-right: none; border-top-left-radius: 3px; border-bottom-left-radius: 3px; color: #000; min-width: 15px; width: 100%; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > .sf-dump-search-input-next, .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > .sf-dump-search-input-previous { background: #F2F2F2; outline: none; border-left: none; font-size: 0; line-height: 0; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > .sf-dump-search-input-next { border-top-right-radius: 3px; border-bottom-right-radius: 3px; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > .sf-dump-search-input-next > svg, .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > .sf-dump-search-input-previous > svg { pointer-events: none; width: 12px; height: 12px; } .phpdebugbar pre.sf-dump .sf-dump-search-wrapper > .sf-dump-search-count { display: inline-block; padding: 0 5px; margin: 0; border-left: none; line-height: 21px; font-size: 12px; }.phpdebugbar pre.sf-dump, .phpdebugbar pre.sf-dump .sf-dump-default{word-wrap: break-word; white-space: pre-wrap; word-break: normal}.phpdebugbar pre.sf-dump .sf-dump-num{font-weight:bold; color:#1299DA}.phpdebugbar pre.sf-dump .sf-dump-const{font-weight:bold}.phpdebugbar pre.sf-dump .sf-dump-str{font-weight:bold; color:#3A9B26}.phpdebugbar pre.sf-dump .sf-dump-note{color:#1299DA}.phpdebugbar pre.sf-dump .sf-dump-ref{color:#7B7B7B}.phpdebugbar pre.sf-dump .sf-dump-public{color:#000000}.phpdebugbar pre.sf-dump .sf-dump-protected{color:#000000}.phpdebugbar pre.sf-dump .sf-dump-private{color:#000000}.phpdebugbar pre.sf-dump .sf-dump-meta{color:#B729D9}.phpdebugbar pre.sf-dump .sf-dump-key{color:#3A9B26}.phpdebugbar pre.sf-dump .sf-dump-index{color:#1299DA}.phpdebugbar pre.sf-dump .sf-dump-ellipsis{color:#A0A000}.phpdebugbar pre.sf-dump .sf-dump-ns{user-select:none;}</style>
<script type="text/javascript">
var phpdebugbar = new PhpDebugBar.DebugBar();
phpdebugbar.addIndicator("php_version", new PhpDebugBar.DebugBar.Indicator({"icon":"code","tooltip":"Version"}), "right");
phpdebugbar.addTab("messages", new PhpDebugBar.DebugBar.Tab({"icon":"list-alt","title":"Messages", "widget": new PhpDebugBar.Widgets.MessagesWidget()}));
phpdebugbar.addIndicator("time", new PhpDebugBar.DebugBar.Indicator({"icon":"clock-o","tooltip":"Request Duration"}), "right");
phpdebugbar.addTab("timeline", new PhpDebugBar.DebugBar.Tab({"icon":"tasks","title":"Timeline", "widget": new PhpDebugBar.Widgets.TimelineWidget()}));
phpdebugbar.addIndicator("memory", new PhpDebugBar.DebugBar.Indicator({"icon":"cogs","tooltip":"Memory Usage"}), "right");
phpdebugbar.addTab("exceptions", new PhpDebugBar.DebugBar.Tab({"icon":"bug","title":"Exceptions", "widget": new PhpDebugBar.Widgets.ExceptionsWidget()}));
phpdebugbar.addTab("views", new PhpDebugBar.DebugBar.Tab({"icon":"leaf","title":"Views", "widget": new PhpDebugBar.Widgets.TemplatesWidget()}));
phpdebugbar.addTab("route", new PhpDebugBar.DebugBar.Tab({"icon":"share","title":"Route", "widget": new PhpDebugBar.Widgets.VariableListWidget()}));
phpdebugbar.addIndicator("currentroute", new PhpDebugBar.DebugBar.Indicator({"icon":"share","tooltip":"Route"}), "right");
phpdebugbar.addTab("queries", new PhpDebugBar.DebugBar.Tab({"icon":"database","title":"Queries", "widget": new PhpDebugBar.Widgets.LaravelSQLQueriesWidget()}));
phpdebugbar.addTab("emails", new PhpDebugBar.DebugBar.Tab({"icon":"inbox","title":"Mails", "widget": new PhpDebugBar.Widgets.MailsWidget()}));
phpdebugbar.addTab("auth", new PhpDebugBar.DebugBar.Tab({"icon":"lock","title":"Auth", "widget": new PhpDebugBar.Widgets.VariableListWidget()}));
phpdebugbar.addIndicator("auth.name", new PhpDebugBar.DebugBar.Indicator({"icon":"user","tooltip":"Auth status"}), "right");
phpdebugbar.addTab("gate", new PhpDebugBar.DebugBar.Tab({"icon":"list-alt","title":"Gate", "widget": new PhpDebugBar.Widgets.MessagesWidget()}));
phpdebugbar.addTab("session", new PhpDebugBar.DebugBar.Tab({"icon":"archive","title":"Session", "widget": new PhpDebugBar.Widgets.VariableListWidget()}));
phpdebugbar.addTab("request", new PhpDebugBar.DebugBar.Tab({"icon":"tags","title":"Request", "widget": new PhpDebugBar.Widgets.HtmlVariableListWidget()}));
phpdebugbar.setDataMap({
"php_version": ["php.version", ],
"messages": ["messages.messages", []],
"messages:badge": ["messages.count", null],
"time": ["time.duration_str", '0ms'],
"timeline": ["time", {}],
"memory": ["memory.peak_usage_str", '0B'],
"exceptions": ["exceptions.exceptions", []],
"exceptions:badge": ["exceptions.count", null],
"views": ["views", []],
"views:badge": ["views.nb_templates", 0],
"route": ["route", {}],
"currentroute": ["route.uri", ],
"queries": ["queries", []],
"queries:badge": ["queries.nb_statements", 0],
"emails": ["swiftmailer_mails.mails", []],
"emails:badge": ["swiftmailer_mails.count", null],
"auth": ["auth.guards", {}],
"auth.name": ["auth.names", ],
"gate": ["gate.messages", []],
"gate:badge": ["gate.count", null],
"session": ["session", {}],
"request": ["request", {}]
});
phpdebugbar.restoreState();
phpdebugbar.ajaxHandler = new PhpDebugBar.AjaxHandler(phpdebugbar, undefined, true);
phpdebugbar.ajaxHandler.bindToXHR();
phpdebugbar.setOpenHandler(new PhpDebugBar.OpenHandler({"url":"http:\/\/127.0.0.1:8000\/_debugbar\/open"}));
phpdebugbar.addDataSet({"__meta":{"id":"Xcbe563448afe2582cd0490d8a2c607ac","datetime":"2019-04-09 06:25:39","utime":1554791139.164124011993408203125,"method":"GET","uri":"\/login","ip":"127.0.0.1"},"php":{"version":"7.3.1","interface":"cli-server"},"messages":{"count":0,"messages":[]},"time":{"start":1554791138.94958400726318359375,"end":1554791139.1641499996185302734375,"duration":0.2145659923553466796875,"duration_str":"214.57ms","measures":[{"label":"Booting","start":1554791138.94958400726318359375,"relative_start":0,"end":1554791139.0624210834503173828125,"relative_end":1554791139.0624210834503173828125,"duration":0.1128370761871337890625,"duration_str":"112.84ms","params":[],"collector":null},{"label":"Application","start":1554791139.0654160976409912109375,"relative_start":0.1158320903778076171875,"end":1554791139.16415309906005859375,"relative_end":3.0994415283203125e-6,"duration":0.0987370014190673828125,"duration_str":"98.74ms","params":[],"collector":null}]},"memory":{"peak_usage":15270592,"peak_usage_str":"14.56MB"},"exceptions":{"count":0,"exceptions":[]},"views":{"nb_templates":5,"templates":[{"name":"auth.login (resources\/views\/auth\/login.blade.php)","param_count":0,"params":[],"type":"blade"},{"name":"layouts.app (resources\/views\/layouts\/app.blade.php)","param_count":4,"params":["obLevel","__env","app","errors"],"type":"blade"},{"name":"layouts.header (resources\/views\/layouts\/header.blade.php)","param_count":4,"params":["obLevel","__env","app","errors"],"type":"blade"},{"name":"layouts.sidebar (resources\/views\/layouts\/sidebar.blade.php)","param_count":4,"params":["obLevel","__env","app","errors"],"type":"blade"},{"name":"layouts.footer (resources\/views\/layouts\/footer.blade.php)","param_count":4,"params":["obLevel","__env","app","errors"],"type":"blade"}]},"route":{"uri":"GET login","middleware":"web","controller":"App\\Http\\Controllers\\Auth\\LoginController@showLoginForm","namespace":"App\\Http\\Controllers","prefix":null,"where":[],"as":"login","file":"vendor\/laravel\/framework\/src\/Illuminate\/Foundation\/Auth\/AuthenticatesUsers.php:18-21"},"queries":{"nb_statements":0,"nb_failed_statements":0,"accumulated_duration":0,"accumulated_duration_str":"0\u03bcs","statements":[]},"swiftmailer_mails":{"count":0,"mails":[]},"auth":{"guards":{"web":"array:2 [\n  \"name\" => \"Guest\"\n  \"user\" => array:1 [\n    \"guest\" => true\n  ]\n]","api":"array:2 [\n  \"name\" => \"Guest\"\n  \"user\" => array:1 [\n    \"guest\" => true\n  ]\n]"},"names":""},"gate":{"count":0,"messages":[]},"session":{"_token":"B6Ph72TTFB3s2IqzUzz244C3MRvUmFZSJqliis1w","_previous":"array:1 [\n  \"url\" => \"http:\/\/127.0.0.1:8000\/login\"\n]","_flash":"array:2 [\n  \"old\" => []\n  \"new\" => []\n]","url":"array:1 [\n  \"intended\" => \"http:\/\/127.0.0.1:8000\/fonts\/fontawesome-webfont3e6e.ttf?v=4.7.0\"\n]","PHPDEBUGBAR_STACK_DATA":"[]"},"request":{"path_info":"\/login","status_code":"<pre class=sf-dump id=sf-dump-1080499398 data-indent-pad=\"  \"><span class=sf-dump-num>200<\/span>\n<\/pre><script>Sfdump(\"sf-dump-1080499398\", {\"maxDepth\":0})<\/script>\n","status_text":"OK","format":"html","content_type":"text\/html; charset=UTF-8","request_query":"<pre class=sf-dump id=sf-dump-1119902798 data-indent-pad=\"  \">[]\n<\/pre><script>Sfdump(\"sf-dump-1119902798\", {\"maxDepth\":0})<\/script>\n","request_request":"<pre class=sf-dump id=sf-dump-1594036055 data-indent-pad=\"  \">[]\n<\/pre><script>Sfdump(\"sf-dump-1594036055\", {\"maxDepth\":0})<\/script>\n","request_headers":"<pre class=sf-dump id=sf-dump-1192203744 data-indent-pad=\"  \"><span class=sf-dump-note>array:10<\/span> [<samp>\n  \"<span class=sf-dump-key>host<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"14 characters\">127.0.0.1:8000<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>connection<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"10 characters\">keep-alive<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>origin<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"21 characters\">http:\/\/127.0.0.1:8000<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>user-agent<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"120 characters\">Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/73.0.3683.86 Safari\/537.36<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>dnt<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str>1<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>accept<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"3 characters\">*\/*<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>referer<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"46 characters\">http:\/\/127.0.0.1:8000\/css\/font-awesome.min.css<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>accept-encoding<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"17 characters\">gzip, deflate, br<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>accept-language<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"14 characters\">en-US,en;q=0.9<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>cookie<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"517 characters\">XSRF-TOKEN=eyJpdiI6IjBVZEQrSUtLRkFJV1B5OEwxSXZyTHc9PSIsInZhbHVlIjoiZ0szemFJanRJa2ZQYk56VXZNMVlHWU5cL25jaVJQQnBXaHd1Ykt3VTlhOEE1djVkXC9rZVRTZlhOdUlEdzhkYkFiIiwibWFjIjoiZmE5YjViNzVjMWRhMTQyYTA2MjRhZWIzOWE3Yzc1NDA1ZjUxYTM1NWE2ZjM2MDJlZjE5YWUwZTk2MTYzZWQ2NSJ9; laravel_session=eyJpdiI6IlwvUWpnRnNyd0lvVGtFNEpseEtJOXZRPT0iLCJ2YWx1ZSI6InZObFM5N2lITHZBQTVjSU1ZQmNTb0pZM2lhOEVqWWpDVk8yZ0daVUdXRmZcL0tSakVWRlAxQmwyc21YWDJ1cmlyIiwibWFjIjoiOWMzZjU5NGNiMzgyYTU2YThkMTEwMzc3ZjQwMmM1M2Q3OTcwNGU0NmIzZDE5MGVmNThlZGJiMzYxYWVkNDI0MSJ9<\/span>\"\n  <\/samp>]\n<\/samp>]\n<\/pre><script>Sfdump(\"sf-dump-1192203744\", {\"maxDepth\":0})<\/script>\n","request_server":"<pre class=sf-dump id=sf-dump-520288953 data-indent-pad=\"  \"><span class=sf-dump-note>array:25<\/span> [<samp>\n  \"<span class=sf-dump-key>DOCUMENT_ROOT<\/span>\" => \"<span class=sf-dump-str title=\"59 characters\">\/Applications\/XAMPP\/xamppfiles\/htdocs\/is226skconnect\/public<\/span>\"\n  \"<span class=sf-dump-key>REMOTE_ADDR<\/span>\" => \"<span class=sf-dump-str title=\"9 characters\">127.0.0.1<\/span>\"\n  \"<span class=sf-dump-key>REMOTE_PORT<\/span>\" => \"<span class=sf-dump-str title=\"5 characters\">50460<\/span>\"\n  \"<span class=sf-dump-key>SERVER_SOFTWARE<\/span>\" => \"<span class=sf-dump-str title=\"28 characters\">PHP 7.3.1 Development Server<\/span>\"\n  \"<span class=sf-dump-key>SERVER_PROTOCOL<\/span>\" => \"<span class=sf-dump-str title=\"8 characters\">HTTP\/1.1<\/span>\"\n  \"<span class=sf-dump-key>SERVER_NAME<\/span>\" => \"<span class=sf-dump-str title=\"9 characters\">127.0.0.1<\/span>\"\n  \"<span class=sf-dump-key>SERVER_PORT<\/span>\" => \"<span class=sf-dump-str title=\"4 characters\">8000<\/span>\"\n  \"<span class=sf-dump-key>REQUEST_URI<\/span>\" => \"<span class=sf-dump-str title=\"6 characters\">\/login<\/span>\"\n  \"<span class=sf-dump-key>REQUEST_METHOD<\/span>\" => \"<span class=sf-dump-str title=\"3 characters\">GET<\/span>\"\n  \"<span class=sf-dump-key>SCRIPT_NAME<\/span>\" => \"<span class=sf-dump-str title=\"10 characters\">\/index.php<\/span>\"\n  \"<span class=sf-dump-key>SCRIPT_FILENAME<\/span>\" => \"<span class=sf-dump-str title=\"69 characters\">\/Applications\/XAMPP\/xamppfiles\/htdocs\/is226skconnect\/public\/index.php<\/span>\"\n  \"<span class=sf-dump-key>PATH_INFO<\/span>\" => \"<span class=sf-dump-str title=\"6 characters\">\/login<\/span>\"\n  \"<span class=sf-dump-key>PHP_SELF<\/span>\" => \"<span class=sf-dump-str title=\"16 characters\">\/index.php\/login<\/span>\"\n  \"<span class=sf-dump-key>HTTP_HOST<\/span>\" => \"<span class=sf-dump-str title=\"14 characters\">127.0.0.1:8000<\/span>\"\n  \"<span class=sf-dump-key>HTTP_CONNECTION<\/span>\" => \"<span class=sf-dump-str title=\"10 characters\">keep-alive<\/span>\"\n  \"<span class=sf-dump-key>HTTP_ORIGIN<\/span>\" => \"<span class=sf-dump-str title=\"21 characters\">http:\/\/127.0.0.1:8000<\/span>\"\n  \"<span class=sf-dump-key>HTTP_USER_AGENT<\/span>\" => \"<span class=sf-dump-str title=\"120 characters\">Mozilla\/5.0 (Macintosh; Intel Mac OS X 10_14_2) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/73.0.3683.86 Safari\/537.36<\/span>\"\n  \"<span class=sf-dump-key>HTTP_DNT<\/span>\" => \"<span class=sf-dump-str>1<\/span>\"\n  \"<span class=sf-dump-key>HTTP_ACCEPT<\/span>\" => \"<span class=sf-dump-str title=\"3 characters\">*\/*<\/span>\"\n  \"<span class=sf-dump-key>HTTP_REFERER<\/span>\" => \"<span class=sf-dump-str title=\"46 characters\">http:\/\/127.0.0.1:8000\/css\/font-awesome.min.css<\/span>\"\n  \"<span class=sf-dump-key>HTTP_ACCEPT_ENCODING<\/span>\" => \"<span class=sf-dump-str title=\"17 characters\">gzip, deflate, br<\/span>\"\n  \"<span class=sf-dump-key>HTTP_ACCEPT_LANGUAGE<\/span>\" => \"<span class=sf-dump-str title=\"14 characters\">en-US,en;q=0.9<\/span>\"\n  \"<span class=sf-dump-key>HTTP_COOKIE<\/span>\" => \"<span class=sf-dump-str title=\"517 characters\">XSRF-TOKEN=eyJpdiI6IjBVZEQrSUtLRkFJV1B5OEwxSXZyTHc9PSIsInZhbHVlIjoiZ0szemFJanRJa2ZQYk56VXZNMVlHWU5cL25jaVJQQnBXaHd1Ykt3VTlhOEE1djVkXC9rZVRTZlhOdUlEdzhkYkFiIiwibWFjIjoiZmE5YjViNzVjMWRhMTQyYTA2MjRhZWIzOWE3Yzc1NDA1ZjUxYTM1NWE2ZjM2MDJlZjE5YWUwZTk2MTYzZWQ2NSJ9; laravel_session=eyJpdiI6IlwvUWpnRnNyd0lvVGtFNEpseEtJOXZRPT0iLCJ2YWx1ZSI6InZObFM5N2lITHZBQTVjSU1ZQmNTb0pZM2lhOEVqWWpDVk8yZ0daVUdXRmZcL0tSakVWRlAxQmwyc21YWDJ1cmlyIiwibWFjIjoiOWMzZjU5NGNiMzgyYTU2YThkMTEwMzc3ZjQwMmM1M2Q3OTcwNGU0NmIzZDE5MGVmNThlZGJiMzYxYWVkNDI0MSJ9<\/span>\"\n  \"<span class=sf-dump-key>REQUEST_TIME_FLOAT<\/span>\" => <span class=sf-dump-num>1554791138.9496<\/span>\n  \"<span class=sf-dump-key>REQUEST_TIME<\/span>\" => <span class=sf-dump-num>1554791138<\/span>\n<\/samp>]\n<\/pre><script>Sfdump(\"sf-dump-520288953\", {\"maxDepth\":0})<\/script>\n","request_cookies":"<pre class=sf-dump id=sf-dump-137410789 data-indent-pad=\"  \"><span class=sf-dump-note>array:2<\/span> [<samp>\n  \"<span class=sf-dump-key>XSRF-TOKEN<\/span>\" => \"<span class=sf-dump-str title=\"40 characters\">B6Ph72TTFB3s2IqzUzz244C3MRvUmFZSJqliis1w<\/span>\"\n  \"<span class=sf-dump-key>laravel_session<\/span>\" => \"<span class=sf-dump-str title=\"40 characters\">J4lR5fcpqxwEmjMUhJCbunzkjgPJS3S1J4aWRCiR<\/span>\"\n<\/samp>]\n<\/pre><script>Sfdump(\"sf-dump-137410789\", {\"maxDepth\":0})<\/script>\n","response_headers":"<pre class=sf-dump id=sf-dump-96116168 data-indent-pad=\"  \"><span class=sf-dump-note>array:5<\/span> [<samp>\n  \"<span class=sf-dump-key>cache-control<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"17 characters\">no-cache, private<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>date<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"29 characters\">Tue, 09 Apr 2019 06:25:39 GMT<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>content-type<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"24 characters\">text\/html; charset=UTF-8<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>set-cookie<\/span>\" => <span class=sf-dump-note>array:2<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"318 characters\">XSRF-TOKEN=eyJpdiI6IjRoZ3pCaFwvODRFVEdKNlpvYjV3SEFRPT0iLCJ2YWx1ZSI6ImZpaUNITkQ3enl6RWVzS3JVc0xhbXpIYmg2OEF6WDZXVHFsK1lyVGdobkpSOHFoanBCbmNtYTh5Q2NzZnp6VGQiLCJtYWMiOiJkZTdjNTE0Njk2NTNlYjMyNmJkYmUxMGJkYzBiZGMxNjVlMjY1MjY5NzcyZjZmNjlkN2M0NWJkZTQwNTcxZjRkIn0%3D; expires=Tue, 09-Apr-2019 08:25:39 GMT; Max-Age=7200; path=\/<\/span>\"\n    <span class=sf-dump-index>1<\/span> => \"<span class=sf-dump-str title=\"335 characters\">laravel_session=eyJpdiI6Ik1SSWFxejliREprRjJPdG5XZXA0SUE9PSIsInZhbHVlIjoiV1ArTmdFNXBTRjRaTmtYS0hDVEprVys5STN5KzJHNjFpWWtDZjdzdVlKWEphZW5SQzVrYmFhVFYydGNNN1MxSiIsIm1hYyI6ImNmOTY5OTk0MmUzMTcyMTNmNWM3OGFhODUyOTQxMzZkMTU1MTFiZDhkZmFiMDFjZDU3ZDFiMjA4OTBmMzA3Y2MifQ%3D%3D; expires=Tue, 09-Apr-2019 08:25:39 GMT; Max-Age=7200; path=\/; httponly<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>Set-Cookie<\/span>\" => <span class=sf-dump-note>array:2<\/span> [<samp>\n    <span class=sf-dump-index>0<\/span> => \"<span class=sf-dump-str title=\"304 characters\">XSRF-TOKEN=eyJpdiI6IjRoZ3pCaFwvODRFVEdKNlpvYjV3SEFRPT0iLCJ2YWx1ZSI6ImZpaUNITkQ3enl6RWVzS3JVc0xhbXpIYmg2OEF6WDZXVHFsK1lyVGdobkpSOHFoanBCbmNtYTh5Q2NzZnp6VGQiLCJtYWMiOiJkZTdjNTE0Njk2NTNlYjMyNmJkYmUxMGJkYzBiZGMxNjVlMjY1MjY5NzcyZjZmNjlkN2M0NWJkZTQwNTcxZjRkIn0%3D; expires=Tue, 09-Apr-2019 08:25:39 GMT; path=\/<\/span>\"\n    <span class=sf-dump-index>1<\/span> => \"<span class=sf-dump-str title=\"321 characters\">laravel_session=eyJpdiI6Ik1SSWFxejliREprRjJPdG5XZXA0SUE9PSIsInZhbHVlIjoiV1ArTmdFNXBTRjRaTmtYS0hDVEprVys5STN5KzJHNjFpWWtDZjdzdVlKWEphZW5SQzVrYmFhVFYydGNNN1MxSiIsIm1hYyI6ImNmOTY5OTk0MmUzMTcyMTNmNWM3OGFhODUyOTQxMzZkMTU1MTFiZDhkZmFiMDFjZDU3ZDFiMjA4OTBmMzA3Y2MifQ%3D%3D; expires=Tue, 09-Apr-2019 08:25:39 GMT; path=\/; httponly<\/span>\"\n  <\/samp>]\n<\/samp>]\n<\/pre><script>Sfdump(\"sf-dump-96116168\", {\"maxDepth\":0})<\/script>\n","session_attributes":"<pre class=sf-dump id=sf-dump-751487500 data-indent-pad=\"  \"><span class=sf-dump-note>array:5<\/span> [<samp>\n  \"<span class=sf-dump-key>_token<\/span>\" => \"<span class=sf-dump-str title=\"40 characters\">B6Ph72TTFB3s2IqzUzz244C3MRvUmFZSJqliis1w<\/span>\"\n  \"<span class=sf-dump-key>_previous<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    \"<span class=sf-dump-key>url<\/span>\" => \"<span class=sf-dump-str title=\"27 characters\">http:\/\/127.0.0.1:8000\/login<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>_flash<\/span>\" => <span class=sf-dump-note>array:2<\/span> [<samp>\n    \"<span class=sf-dump-key>old<\/span>\" => []\n    \"<span class=sf-dump-key>new<\/span>\" => []\n  <\/samp>]\n  \"<span class=sf-dump-key>url<\/span>\" => <span class=sf-dump-note>array:1<\/span> [<samp>\n    \"<span class=sf-dump-key>intended<\/span>\" => \"<span class=sf-dump-str title=\"63 characters\">http:\/\/127.0.0.1:8000\/fonts\/fontawesome-webfont3e6e.ttf?v=4.7.0<\/span>\"\n  <\/samp>]\n  \"<span class=sf-dump-key>PHPDEBUGBAR_STACK_DATA<\/span>\" => []\n<\/samp>]\n<\/pre><script>Sfdump(\"sf-dump-751487500\", {\"maxDepth\":0})<\/script>\n"}}, "Xcbe563448afe2582cd0490d8a2c607ac");

</script>
</body>
</html>

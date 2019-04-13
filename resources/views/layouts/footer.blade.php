<!--************************************
         Footer Start
*************************************-->
         <footer id="tg-footer" class="tg-footer tg-haslayout">
            <div class="tg-signupbox">
               <div class="container">
                  <div class="tg-signuptextbox">
                     <h3>Signup to be Updated!</h3>
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
                            <a name="contact">
                                <strong class="tg-logo">Contact Us</strong>
                            </a>
                              <div class="tg-description">
                                 <p>You may contact us in the following details below:</p>
                              </div>
                              <ul class="tg-infolist">
                                 <li>
                                    <i class="glyphicon glyphicon-home"></i>
                                    <address> Antipolo Government City Hall, Antipolo City</address>
                                 </li>
                                 <li>
                                    <i class="glyphicon glyphicon-phone"></i>
                                    <span> +63910-096-3298</span>
                                 </li>
                                 <li>
                                    <a href="m.me/AntipoloCityYouth" target="_blank">
                                    <i class="glyphicon glyphicon-envelope"></i>
                                    <span> Antipolo Youth Chat</span>
                                    </a>
                                 </li>
                              </ul>
                              <ul class="tg-socialicons">
                                 <li class="tg-facebook"><a href="https://www.facebook.com/pg/AntipoloCityYouth" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                 <li class="tg-twitter"><a href="https://twitter.com/AntipoloCityGov" target="_blank"><i class="fa fa-twitter"></i></a></li>
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
                              <h3>Recent Posts</h3>
                           </div>
                           <div class="tg-widgetcontent">
                            @foreach ($recentposts as $recent)
                              <ul>
                                 <li><a href="/post/{{ $recent->id }}" target="_blank">{{ $recent->title }}</a></li>
                              </ul>
                              @endforeach
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
                        <span class="tg-copyright">Copyright &copy; {{ now()->year }}
                        SK Federation of Antipolo City Government. All Rights Reserved</span>
                        <nav class="tg-addnav">
                           <ul>
                              <li><a href="http://nyc.gov.ph/sangguniangkabataan/" target="_blank">Privacy Policy</a></li>
                              <li><a href="http://nyc.gov.ph/sangguniangkabataan/" target="_blank">Term and Conditions</a></li>
                              <li><a href="/contact">Contact</a></li>
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

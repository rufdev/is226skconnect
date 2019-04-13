 <!--************************************
Home Slider Start
*************************************-->
            <div class="clearfix"></div>
            <div class="container">
               <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                     <div class="tg-homebannervtwo">
                        <div class="item">
                           <figure>
                              <p>
                                 <script>
                                    jssor_slider_starter = function (containerId) {
                                                var _SlideshowTransitions = [
                                                            //Fade Twins
                                                { $Duration: 700, $Opacity: 2, $Brother: { $Duration: 1000, $Opacity: 2 } },
                                                                                                                                                                                                                                                        ];
                                                var options = {
                                            $FillMode: 0,
                                            $AutoPlay: true,
                                            $AutoPlayInterval: 2000,
                                            $PauseOnHover: 1,
                                            $ArrowKeyNavigation: true,
                                            $SlideDuration: 500,
                                            $MinDragOffsetToSlide: 40,
                                            $SlideSpacing: 0,
                                            $DragOrientation: 1,
                                            $PlayOrientation: 1,
                                            $DisplayPieces: 1,
                                            $ParkingPosition: 0,
                                            $UISearchMode: 1,

                                                        $SlideshowOptions: {
                                                $Class: $JssorSlideshowRunner$,
                                                $Transitions: _SlideshowTransitions,
                                                $TransitionsOrder: 0,
                                                $ShowLink: false
                                            },
                                                        $BulletNavigatorOptions: {
                                                $Class: $JssorBulletNavigator$,
                                                $ChanceToShow: 2,
                                                $AutoCenter: 1,
                                                $Orientation: 1,
                                                $SpacingX: 8,
                                                $SpacingY: 8,
                                                $Steps: 1,
                                                $Lanes: 1
                                            },

                                            $ArrowNavigatorOptions: {
                                                $Class: $JssorArrowNavigator$,
                                                $ChanceToShow: 1,
                                                $AutoCenter: 2,
                                                $Steps: 1
                                            }
                                        };

                                        var jssor_slider1 = new $JssorSlider$("slider", options);

                                        function ScaleSlider() {
                                            var bodyWidth = document.body.clientWidth;
                                            var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                                            if (parentWidth)
                                                jssor_slider1.$SetScaleWidth(Math.max(Math.min(parentWidth, bodyWidth-40), 200));
                                                                                // Remove 40 if you want full width slider
                                            else
                                                $JssorUtils$.$Delay(ScaleSlider, 30);
                                        }

                                        ScaleSlider();
                                        $JssorUtils$.$AddEvent(window, "load", ScaleSlider);

                                        if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                                            $JssorUtils$.$OnWindowResize(window, ScaleSlider);
                                        }
                                    };
                                 </script>
                              <div id="slider" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 1300px; height: 500px; overflow: hidden;">
                                 <div u="loading" style="position: absolute; top: 0px; left: 0px;">
                                    <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;">
                                    </div>
                                    <div class="load" style="position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;">
                                    </div>
                                 </div>
                                 <!-- Slides Container -->
                                 <div u="slides" style="cursor: move; position: absolute; left: 0px; top: 0px; width: 1300px; height: 500px; overflow: hidden;">
                                    <div>
                                       <img u="image" src="{{ url(''.'img/skheader.png') }}" />
                                    </div>
                                    <div>
                                       <img u="image" src="{{ url(''.'img/forthefilipinoyouth.jpg') }}" />
                                    </div>
                                    <div>
                                        <img u="image" src="{{ url(''.'img/hands.jpg') }}" />
                                    </div>
                                    <div>
                                       <img u="image" src="{{ url(''.'img/youthprogram.jpg') }}"  />
                                    </div>
                                    <div>
                                        <img u="image" src="{{ url(''.'img/youthservice.jpg') }}"  />
                                    </div>
                                    <div>
                                       <img u="image" src="{{ url(''.'img/antipoloys.jpg') }}" />
                                    </div>
                                 </div>
                                 <!-- Bullet Navigator Skin Begin -->
                                 <div u="navigator" class="jssorb21" style="position: absolute; bottom: 26px; left: 6px;">
                                    <div u="prototype" style="POSITION: absolute; WIDTH: 19px; HEIGHT: 19px; text-align:center; line-height:19px; color:White; font-size:12px;"></div>
                                 </div>
                                 <!-- Bullet Navigator Skin End -->
                                 <!-- Arrow Navigator Skin Begin -->
                                 <!-- Arrow Left -->
                                 <span u="arrowleft" class="jssora21l" style="width: 55px; height: 55px; top: 123px; left: 8px;"></span>
                                 <!-- Arrow Right -->
                                 <span u="arrowright" class="jssora21r" style="width: 55px; height: 55px; top: 123px; right: 8px"></span>
                                 <!-- Arrow Navigator Skin End -->
                                 <script>
                                    document.addEventListener("DOMContentLoaded",function(){
                                        jssor_slider_starter('slider');
                                    });
                                 </script>
                              </div>
                              </p>
                              <figcaption class="tg-slidercontent">
                                 <div class="tg-slidercontentbox">
                                    <!-- <a class="tg-btn" href="javascript:void(0);">read more</a> -->
                                    <div class="tg-titledescription">
                                       <h1>Antipolo Youth Government</h1>
                                       <div class="tg-description">
                                          <p>To empower the youth to be involved and patriotic, realizing their aspiration anchored on integrity and compassion of the administration.</p>
                                       </div>
                                    </div>
                                 </div>
                              </figcaption>
                           </figure>
                        </div>
                     </div>
                     <div class="tg-tickerbox">
                        <span>Daily Inspiration:</span>
                        <div class="item">
                           <div class="tg-description">
                              <p>
                              <div class="container">
                                 <div class='row'>
                                    <div class='col-md-offset-1 col-md-10'>
                                       <div class="quote-carousel carousel slide" data-ride="carousel" id="quote-carousel-quotes">
                                          <ol class="carousel-indicators">
                                             <li data-target="#quote-carousel-quotes" data-slide-to="0" class="active"></li>
                                             <li data-target="#quote-carousel-quotes" data-slide-to="1" class=""></li>
                                             <li data-target="#quote-carousel-quotes" data-slide-to="2" class=""></li>
                                             <li data-target="#quote-carousel-quotes" data-slide-to="3" class=""></li>
                                          </ol>
                                          <div class="carousel-inner">
                                             <div class="item active">
                                                <blockquote>
                                                   <div class="row">
                                                      <div class="col-sm-offset-1 col-sm-10">
                                                         <p>Those who improve with age embrace the power of personal growth and personal achievement and begin to replace youth with wisdom, innocence with understanding, and lack of purpose with self-actualization.</p>
                                                         <small>
                                                         Bo Bennett
                                                         </small>
                                                      </div>
                                                   </div>
                                                </blockquote>
                                             </div>
                                             <div class="item ">
                                                <blockquote>
                                                   <div class="row">
                                                      <div class="col-sm-offset-1 col-sm-10">
                                                         <p>Older men declare war. But it is the youth that must fight and die.</p>
                                                         <small>
                                                         Herbert Hoover
                                                         </small>
                                                      </div>
                                                   </div>
                                                </blockquote>
                                             </div>
                                             <div class="item ">
                                                <blockquote>
                                                   <div class="row">
                                                      <div class="col-sm-offset-1 col-sm-10">
                                                         <p>Youth is the future of our generation.</p>
                                                         <small>
                                                         Jose Rizal
                                                         </small>
                                                      </div>
                                                   </div>
                                                </blockquote>
                                             </div>
                                             <div class="item ">
                                                <blockquote>
                                                   <div class="row">
                                                      <div class="col-sm-offset-1 col-sm-10">
                                                         <p>The youth needs to be enabled to become the job generators from job seekers.</p>
                                                         <small>
                                                         Abdul Kalam
                                                         </small>
                                                      </div>
                                                   </div>
                                                </blockquote>
                                             </div>
                                          </div>
                                          <a data-slide="prev" href="#quote-carousel-quotes" class="left  carousel-control"><i class="fa fa-chevron-left"></i></a>
                                          <a data-slide="next" href="#quote-carousel-quotes" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
<!--************************************
Home Slider End
*************************************-->

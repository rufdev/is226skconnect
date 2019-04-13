<!--************************************
         Sidebar Start
*************************************-->
<div class="col-xs-12 col-sm-4 col-md-3 col-lg-3">
    <aside id="tg-sidebar" class="tg-sidebar">
       {{-- <div class="tg-widget">
          <div class="tg-widgetcontent">
             <form class="tg-formtheme tg-formsearch" action="http://52.220.57.1/search-results" method="get">
                <fieldset>
                   <input type="search" name="q" class="form-control" placeholder="What are you looking for?">
                   <button type="submit" class="tg-btnsearch"><i class="icon-magnifier"></i></button>
                </fieldset>
             </form>
          </div>
       </div> --}}
       <div class="tg-widget tg-widgetnoticeboard">
          <div class="tg-widgettitle">
             <h3><b>Memo Circulars</b></h3>
          </div>
          <div class="tg-widgetcontent">
             <ul>
                @foreach ($memos as $memo)
                    <li>
                    <a href="memo/{{ $memo->id }}">{{ $memo->title }}</a>
                    </li>
                @endforeach
             </ul>
             <div class="tg-btnsbox">
                    <a class="tg-btn" href="/memos">View All Memos</a>
                 </div>
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
            @foreach($downloads as $download)
                <li>
                <a href="/download/{{ $download->id }}" download>
                   <i class="fa fa-paperclip"></i>
                    {{ $download->title }}
                   </a>
                </li>
            @endforeach
             </ul>
          </div>
       </div>
    </aside>
 </div>
<!--************************************
         Sidebar End
*************************************-->

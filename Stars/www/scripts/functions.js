// Jquery EVENTS
// Page_Location 
$( document ).on( "pageinit", "#chooselocatinpage", function() {
    $( document ).on( "swipeleft swiperight", "#chooselocatinpage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#location_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_LocationB1
$( document ).on( "pageinit", "#locationB1", function() {
    $( document ).on( "swipeleft swiperight", "#locationB1", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#locationB1_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_LocationB2
$( document ).on( "pageinit", "#locationB2", function() {
    $( document ).on( "swipeleft swiperight", "#locationB2", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#locationB2_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_Main
$( document ).on( "pageinit", "#mainppage", function() {
    $( document ).on( "swipeleft swiperight", "#mainppage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#mainppage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_Sans 
$( document ).on( "pageinit", "#sanspage", function() {
    $( document ).on( "swipeleft swiperight", "#sanspage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#sanspage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_ChooseSans 
$( document ).on( "pageinit", "#choosesanspage", function() {
    $( document ).on( "swipeleft swiperight", "#choosesanspage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#choosesanspage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_ChooseClass 
$( document ).on( "pageinit", "#chooseclasspage", function() {
    $( document ).on( "swipeleft swiperight", "#chooseclasspage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#chooseclasspage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_WorkOut 
$( document ).on( "pageinit", "#workoutpage", function() {
    $( document ).on( "swipeleft swiperight", "#workoutpage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#workoutpage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_Contact 
$( document ).on( "pageinit", "#contactpage", function() {
    $( document ).on( "swipeleft swiperight", "#contactpage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#cotactpage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_News 
$( document ).on( "pageinit", "#newspage", function() {
    $( document ).on( "swipeleft swiperight", "#newspage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#newspage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_Introduction 
$( document ).on( "pageinit", "#introductionpage", function() {
    $( document ).on( "swipeleft swiperight", "#introductionpage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#introductionpage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_SignUp 
$( document ).on( "pageinit", "#signuppage", function() {
    $( document ).on( "swipeleft swiperight", "#signuppage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#signuppage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_Suggestion 
$( document ).on( "pageinit", "#suggestionpage", function() {
    $( document ).on( "swipeleft swiperight", "#suggestionpage", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#suggestionpage_panel" ).panel( "open" );
            } 
        }
    });
});
// Page_Suggestion 
$( document ).on( "pageinit", "#demo_swiper", function() {
    $( document ).on( "swipeleft swiperight", "#demo_swiper", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#demo_panel" ).panel( "open" );
            } 
        }
    });
});




// fetch('https://api.unsplash.com/photos/random/?count=5&client_id=52d8369eb3e2576a5f5b6423865e074e9c7045761bff1ac5664ff3e0bdb57a1d') 
//   .then(response => response.json())
//   .then(data => {
//     data.forEaach(function(image, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p class="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
//   });






//$(document).ready(function () {
//    //initialize swiper when document ready
//    var mySwiper = new Swiper ('.swiper-container', {
//      // Optional parameters
//      direction: 'horizontal',
//      loop: true,
//
//    // If we need pagination
//    pagination: {
//      el: '.swiper-pagination',
//    },
//
//    // Navigation arrows
//    navigation: {
//      nextEl: '.swiper-button-next',
//      prevEl: '.swiper-button-prev',
//    },
//
//    // And if we need scrollbar
//    scrollbar: {
//      el: '.swiper-scrollbar',
//    },
//  })
//  });

(function() {

  var $$ = function(selector, context) {
    var context = context || document;
    var elements = context.querySelectorAll(selector);
    return [].slice.call(elements);
  };

  function _fncSliderInit($slider, options) {
    var prefix = ".fnc-";

    var $slider = $slider;
    var $slidesCont = $slider.querySelector(prefix + "slider__slides");
    var $slides = $$(prefix + "slide", $slider);
    var $controls = $$(prefix + "nav__control", $slider);
    var $controlsBgs = $$(prefix + "nav__bg", $slider);
    var $progressAS = $$(prefix + "nav__control-progress", $slider);

    var numOfSlides = $slides.length;
    var curSlide = 1;
    var sliding = false;
    var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
    var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

    var autoSlidingActive = false;
    var autoSlidingTO;
    var autoSlidingDelay = 5000; // default autosliding delay value
    var autoSlidingBlocked = false;

    var $activeSlide;
    var $activeControlsBg;
    var $prevControl;

    function setIDs() {
      $slides.forEach(function($slide, index) {
        $slide.classList.add("fnc-slide-" + (index + 1));
      });

      $controls.forEach(function($control, index) {
        $control.setAttribute("data-slide", index + 1);
        $control.classList.add("fnc-nav__control-" + (index + 1));
      });

      $controlsBgs.forEach(function($bg, index) {
        $bg.classList.add("fnc-nav__bg-" + (index + 1));
      });
    };

    setIDs();

    function afterSlidingHandler() {
      $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
      $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

      $activeSlide.classList.remove("m--before-sliding");
      $activeControlsBg.classList.remove("m--nav-bg-before");
      $prevControl.classList.remove("m--prev-control");
      $prevControl.classList.add("m--reset-progress");
      var triggerLayout = $prevControl.offsetTop;
      $prevControl.classList.remove("m--reset-progress");

      sliding = false;
      var layoutTrigger = $slider.offsetTop;

      if (autoSlidingActive && !autoSlidingBlocked) {
        setAutoslidingTO();
      }
    };

    function performSliding(slideID) {
      if (sliding) return;
      sliding = true;
      window.clearTimeout(autoSlidingTO);
      curSlide = slideID;

      $prevControl = $slider.querySelector(".m--active-control");
      $prevControl.classList.remove("m--active-control");
      $prevControl.classList.add("m--prev-control");
      $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

      $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
      $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

      $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
      $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

      $activeSlide.classList.add("m--before-sliding");
      $activeControlsBg.classList.add("m--nav-bg-before");

      var layoutTrigger = $activeSlide.offsetTop;

      $activeSlide.classList.add("m--active-slide");
      $activeControlsBg.classList.add("m--active-nav-bg");

      setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
    };



    function controlClickHandler() {
      if (sliding) return;
      if (this.classList.contains("m--active-control")) return;
      if (options.blockASafterClick) {
        autoSlidingBlocked = true;
        $slider.classList.add("m--autosliding-blocked");
      }

      var slideID = +this.getAttribute("data-slide");

      performSliding(slideID);
    };

    $controls.forEach(function($control) {
      $control.addEventListener("click", controlClickHandler);
    });

    function setAutoslidingTO() {
      window.clearTimeout(autoSlidingTO);
      var delay = +options.autoSlidingDelay || autoSlidingDelay;
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 1;

      autoSlidingTO = setTimeout(function() {
        performSliding(curSlide);
      }, delay);
    };

    if (options.autoSliding || +options.autoSlidingDelay > 0) {
      if (options.autoSliding === false) return;
      
      autoSlidingActive = true;
      setAutoslidingTO();
      
      $slider.classList.add("m--with-autosliding");
      var triggerLayout = $slider.offsetTop;
      
      var delay = +options.autoSlidingDelay || autoSlidingDelay;
      delay += slidingDelay + slidingAT;
      
      $progressAS.forEach(function($progress) {
        $progress.style.transition = "transform " + (delay / 1000) + "s";
      });
    }
    
    $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

  };

  var fncSlider = function(sliderSelector, options) {
    var $sliders = $$(sliderSelector);

    $sliders.forEach(function($slider) {
      _fncSliderInit($slider, options);
    });
  };

  window.fncSlider = fncSlider;
}());

/* not part of the slider scripts */

/* Slider initialization
options:
autoSliding - boolean
autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
*/
fncSlider(".example-slider", {autoSlidingDelay: 4000});

var $demoCont = document.querySelector(".demo-cont");

[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function($btn) {
  $btn.addEventListener("click", function() {
    $demoCont.classList.toggle("credits-active");
  });
});








































$('.location_btn').on("tap", function (Event){
    $.mobile.changePage('#chooselocatinpage');
});








// Snack Bar
function hello() {
  var snack = new Snackbar();
  snack.message('Hello World');
}


// Page_login 
$('#login_btn_submit').on("tap", function (Event){
    var etx_txt = $("#login_btnt_submit").val();
    var snack = new Snackbar();
    if (( etx_txt.length == 11 ) && ( etx_txt.startsWith("09"))) {
        $.mobile.changePage('#smspage');
    }else {    
        snack.error("شماره همراه نامعتبر است");
    }
});


// Page_Sms
$('#sms_btn_submit').on("tap", function (Event){
    var etx_txt = $("#sms_etx_verify").val();
    if (( etx_verify_1.length == 1 ) && 
        ( etx_verify_2.length == 1 ) && 
        ( etx_verify_3.length == 1 ) && 
        ( etx_verify_4.length == 1 ) ) {
    $.mobile.changePage('#mainppage');
    }else {
        snack.error("کد نامعتبر است");
    }
});


// Page_Location
$('#location_btn_B1').on("tap", function (Event){
    $.mobile.changePage('#locationB1');
});
$('#location_btn_B2').on("tap", function (Event){
    $.mobile.changePage('#locationB2');
});
// Page_LocationB1
$('#locationB1_btn').on("tap", function (Event){
    $.mobile.changePage('#locationB2');
});
// Page_LocationB2
$('#locationB2_btn').on("tap", function (Event){
    $.mobile.changePage('#locationB1');
});


// Page_Main
$('#main_btn_sans').on("tap", function (Event){
    $.mobile.changePage('#sanspage');
});
$('#main_btn_signup').on("tap", function (Event){
    $.mobile.changePage('#signuppage');
});
$('#main_btn_sugestion').on("tap", function (Event){
    $.mobile.changePage('#suggestionpage');
});
$('#main_btn_news').on("tap", function (Event){
    $.mobile.changePage('#newspage');
});
$('#main_btn_aboutus').on("tap", function (Event){
    $.mobile.changePage('#contactpage');
});
$('#main_btn_introduction').on("tap", function (Event){
    $.mobile.changePage('#introductionpage');
});



// Page_Sans
$('#sans_btn_B1').on("tap", function (Event){
    $.mobile.changePage('#choosesanspage');
});
$('#sans_btn_B2').on("tap", function (Event){
    $.mobile.changePage('#choosesanspage');
});


// Page_ChooseSans
$('#').delegate("li","tap", function (event) {
    var selected = $(this);
    selected.attr("data-ir");
});


// Page_ChooseClass


// Page_WorkOut


// Page_Contact


// Page_News


// Page_Introduction


// Page_SignUp


// Page_Suggestion


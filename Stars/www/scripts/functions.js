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
$( document ).on( "pageinit", "#cotactpage", function() {
    $( document ).on( "swipeleft swiperight", "#cotactpage", function( e ) {
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
    if (( etx_txt.length == 11 ) && ( etx_txt.startsWith("09"))) {
    $.mobile.changePage('#smspage');
    }else {
        
    }
});


// Page_Sms
$('#sms_btn_again').on("tap", function (Event){
   
});

$('#sms_btn_submit').on("tap", function (Event){
    var etx_txt = $("#sms_etx_verify").val();
    if (( etx_txt.length == 4 ) ) {
    $.mobile.changePage('#mainppage');
    }else {
        
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
    $.mobile.changePage('#cotactpage');
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


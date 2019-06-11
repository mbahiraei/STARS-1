// Jquery EVENTS
$( document ).on( "swipeleft", function( e ) {
    if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
        $(".panel1").panel( "open" );
    }
});

$('.location_btn').on("tap", function (Event){
    $.mobile.changePage('#chooselocatinpage');
});






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


// Page_Main
$('#main_btn_sans').on("tap", function (Event){
    $.mobile.changePage('#sanspage');
});
$('#main_btn_signup').on("tap", function (Event){
    $.mobile.changePage('#signuppage');
});
$('#main_btn_sugestion').on("tap", function (Event){
    $.mobile.changePage('#cotactpage');
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


// Page_Location
$('#location_btn_B1').on("tap", function (Event){
    $.mobile.changePage('#locationB1');
});
$('#location_btn_B2').on("tap", function (Event){
    $.mobile.changePage('#locationB2');
});

// Page_LocationB1


// Page_LocationB2


// Page_Contact


// Page_Introduction


// Page_SignUp


// Page_Sms


// Page_ChooseWorkout


// Page_ChooseSans


// Page_WorkOut


// Page_ChooseClass


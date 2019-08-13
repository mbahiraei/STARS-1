// Jquery EVENTS
$('video').on('play', function (e) {
    swiper.autoplay.stop();
});
$('video').on('stop pause ended', function (e) {
    swiper.autoplay.start();
});





// Panel
function swip_panel(text) {
    $( document ).on( "swipeleft", text, function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
                $( text+"_panel"  ).panel( "open" );
        }
    });
}





// Page_Location Panel
$( document ).on( "pageinit", "#chooselocatinpage", function() {
    swip_panel("#chooselocatinpage");
});
// Page_LocationB1 Panel
$( document ).on( "pageinit", "#locationB1", function() {
    swip_panel("#locationB1");
});
// Page_LocationB2 Panel
$( document ).on( "pageinit", "#locationB2", function() {
    swip_panel("#locationB2");
});
// Page_Main Panel
$( document ).on( "pageinit", "#mainpage", function() {
    swip_panel("#mainpage");
});
// Page_Sans Panel 
$( document ).on( "pageinit", "#sanspage", function() {
    swip_panel("#sanspage");
});
// Page_ChooseSans Panel 
$( document ).on( "pageinit", "#choosesanspage", function() {
    swip_panel("#choosesanspage");
});
// Page_ChooseClass Panel 
$( document ).on( "pageinit", "#chooseclasspage", function() {
    swip_panel("#chooseclasspage");
});
// Page_WorkOut Panel 
$( document ).on( "pageinit", "#workoutpage", function() {
    swip_panel("#workoutpage");
});
// Page_Contact Panel 
$( document ).on( "pageinit", "#contactpage", function() {
    swip_panel("#contactpage");
});
// Page_News  Panel
$( document ).on( "pageinit", "#newspage", function() {
    swip_panel("#newspage");
});
// Page_All_News  Panel
$( document ).on( "pageinit", "#allnewspage", function() {
    swip_panel("#allnewspage");
});
// Page_Articles  Panel
$( document ).on( "pageinit", "#articlespage", function() {
    swip_panel("#articlespage");
});
// Page_Introduction Panel 
$( document ).on( "pageinit", "#introductionpage", function() {
    swip_panel("#introductionpage");
});
// Page_SignUp Panel 
$( document ).on( "pageinit", "#signuppage", function() {
    swip_panel("#signuppage");
});
// Page_Suggestion Panel 
$( document ).on( "pageinit", "#suggestionpage", function() {
    swip_panel("#suggestionpage");
});
// Page_Program_Request Panel 
$( document ).on( "pageinit", "#programrequestpage", function() {
    swip_panel("#programrequestpage");
});
// Page_Program_Request_P1 Panel 
$( document ).on( "pageinit", "#programpart1page", function() {
    swip_panel("#programpart1page");
});
// Page_Program_Request_P2 Panel 
$( document ).on( "pageinit", "#programpart2page", function() {
    swip_panel("#programpart2page");
});
// Page_Program_Request_P3 Panel 
$( document ).on( "pageinit", "#programpart3page", function() {
    swip_panel("#programpart3page");
});
// Page_GoodToKnow Panel 
$( document ).on( "pageinit", "#goodtoknowpage", function() {
    swip_panel("#goodtoknowpage");
});
// Page_Profile Panel 
$( document ).on( "pageinit", "#profilepage", function() {
    swip_panel("#profilepage");
});
// Page_Rules Panel 
$( document ).on( "pageinit", "#rulespage", function() {
    swip_panel("#rulespage");
});
// demo_swiper Panel 
$( document ).on( "pageinit", "#demo_swiper", function() {
    swip_panel("#demo_swiper");
});










// Location BTN
$('.location_btn').on("tap", function (Event){
    $.mobile.changePage('#chooselocatinpage');
});










// Snack Bar
function snack_success(text) {
  var snack = new Snackbar();
  snack.success(text);
}
function snack_error(text) {
  var snack = new Snackbar();
  snack.error(text);
}










function Timer_show(){
    interval = setInterval(function() {
        var timer = $('#sms_timer').html();
        timer = timer.split(':');
        var minutes = parseInt(timer[0], 10);
        var seconds = parseInt(timer[1], 10);
        seconds -= 1;
        if (minutes < 0) return clearInterval(interval);
        if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
        if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        }
        else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
        $('#sms_timer').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0){
            $('#sms_btn_again').prop('disabled', false);
            clearInterval(interval);
        }
    }, 1000);
}
// Page_login 
$('#login_btn_submit').on("tap", function (Event){
    var etx_txt = $("#login_etx_submit").val().trim();
    if (( etx_txt.length == 11 ) && ( etx_txt.startsWith("09"))) {
        $.mobile.changePage('#smspage');
        $('#sms_timer').html("00:05");
        Timer_show();
    }else {
        
    }
});










// Page_Sms
$('#sms_btn_submit').on("tap", function (Event){
    var etx_txt_1 = $("#sms_etx_submit").val().trim();

    if (etx_txt_1.length == 4 ) {
        $.mobile.changePage('#mainpage');
    }else {
        snack_error('کد اشتباه است'); 
    }
});


$('#sms_b_again').on("tap", function (Event){
    $.mobile.changePage('#loginpage'); 
    $('#sms_btn_again').prop('disabled', true);
});


$('#sms_btn_again').on("tap", function (Event){
   snack_success('کد مجددا ارسال شد');
    $('#sms_btn_again').prop('disabled', true);
    $('#sms_timer').html("00:05");
    Timer_show();
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
    $.mobile.changePage('#allnewspage');
});
$('#main_btn_articles').on("tap", function (Event){
    $.mobile.changePage('#articlespage');
});
$('#main_btn_introduction').on("tap", function (Event){
    $.mobile.changePage('#introductionpage');
});




$('#mainpage_list').delegate("li","tap", function (event) {
    var selected = $(this);
    selected.attr("data-id");
});




function swiper_main () {
    var swiper = new Swiper('.swiper_main', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-main-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-main-button-next',
        prevEl: '.swiper-main-button-prev',
      },
    });
    }

$( document ).on( "pageinit", "#mainpage", function($) {
    setTimeout(function() {
	swiper_main("updateSliderSize", true);
    }, 300);
});

function mainpage_list(){
    $( "#mainpage_list li" ).on( "tap", function( event ) {
        var selected = $(this);
        selected.attr("data-id");
        $.mobile.changePage('#newspage');
    });
}
$( document ).on( "pageinit", "#mainpage", function($) {
    mainpage_list();
});












// Page_Sans
$('#sans_btn_B1').on("tap", function (){
    $.mobile.changePage('#choosesanspage');
});
$('#sans_btn_B2').on("tap", function (){
    $.mobile.changePage('#choosesanspage');
});










//// Page_ChooseSans
$( document ).delegate("#choosesanspage", "pageinit", function() {
    
  setTimeout(function(){ $("#choosesanspage_list").on("click", "li", function() {
        var selected = $(this);
        var id= selected.attr("data-id");
        $.mobile.changePage('#chooseclasspage');
    }); }, 1000);
});







        


// Page_ChooseClass
$( document ).delegate("#chooseclasspage", "pageinit", function() {
    $("#chooseclasspage_list").on("click", "li", function() {
        var selected = $(this);
        var id= selected.attr("data-id");
        $.mobile.changePage('#workoutpage');
    });
});









function swiper () {
    var swiper = new Swiper('.swiper_workout', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-workout-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-workout-button-next',
        prevEl: '.swiper-workout-button-prev',
      },
    });
    }
// Page_WorkOut   
$( document ).on( "pageinit", "#workoutpage", function($) {
    setTimeout(function() {
	swiper("updateSliderSize", true);
    }, 300);
});










// Page_Contact
$('#cotactpage_btn').on("tap", function (Event){
    var contact_etx = $("#cotactpage_textarea").val().trim();

    if (contact_etx.length != 0 ) {
        
    }else {
        snack_error('متن ارسالــی نمی تواند خالی باشد'); 
    }
});










// Page_News










// Page_AllNews
$('#allnewspage_list').delegate("li","tap", function (event) {
    var selected = $(this);
    selected.attr("data-id");
    $.mobile.changePage('#newspage');
});










// Page_Article
$('#articlespage_list').delegate("li","tap", function (event) {
    var selected = $(this);
    selected.attr("data-id");
    $.mobile.changePage('#newspage');
});










// Page_Introduction 
function galleryThumb () {
    var galleryThumbs = new Swiper('.gallery-thumbs', {
      spaceBetween: 10,
      slidesPerView: 3,
      loop: true,
      freeMode: true,
      loopedSlides: 10, //looped slides should be the same
      watchSlidesVisibility: true,
    });
    var galleryTop = new Swiper('.gallery-top', {
      spaceBetween: 10,
      loop:true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      loopedSlides: 10, //looped slides should be the same
      navigation: {
        nextEl: '.swiper-introduction-button-next',
        prevEl: '.swiper-introduction-button-prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });
}


$( document ).on( "pageinit", "#introductionpage", function($) {
    setTimeout(function() {
	galleryThumb("updateSliderSize", true);
    }, 300);
});

  








// Page_SignUp
$('#signuppage_btn').on("tap", function (Event){
    var fullname = $("#singup_input_fullname").val().trim();
    var socialcode = $("#singup_input_social_code").val().trim();
    var phonenumber = $("#singup_input_number").val().trim();
    var address = $("#singup_txtarea_address").val().trim();

    if (fullname.length != 0 ) {
        if (socialcode.length != 0 ) {
            if (phonenumber.length != 0 ) {
                if (address.length != 0 ) {
                    snack_success('درخواست شما ارسال شد');
                }else {
                    snack_error('آدرس نمی تواند خالی باشد');
                }
            }else {
                snack_error('شماره تماس نمی تواند خالی باشد');
            }
        }else {
            snack_error('کد ملی نمی تواند خالی باشد');
        }
    }else {
        snack_error('نام و نام خانوادگی نمی تواند خالی باشد'); 
    }
});










// Page_Suggestion










// Page_Program_Request
$('#programrequestpage_btn').on("tap", function (Event){
    var bimary = $("#programrequestpageinput_bimary").val().trim();
    var asib = $("#programrequestpage_input_asib").val().trim();
    var sabeghe = $("#programrequestpage_input_sabeghe").val().trim();
    var regime = $("#programrequestpage_input_regime").val().trim();
    var desceription = $("#programrequestpage_input_desceription").val().trim();

    if (bimary.length != 0 ) {
        if (asib.length != 0 ) {
            if (sabeghe.length != 0 ) {
                if (regime.length != 0 ) {
                    if (desceription.length != 0 ) {
                        $.mobile.changePage ('#programpart1page');
                    }else {
                        snack_error('توضیحات نمی تواند خالی باشد');
                    }
                }else {
                    snack_error('رژیم نمی تواند خالی باشد');
                }
            }else {
                snack_error('سابقه ورزش نمی تواند خالی باشد');
            }
        }else {
            snack_error('سابقه مشکل حرکتی نمی تواند خالی باشد');
        }
    }else {
        snack_error('سابقه بیماری نمی تواند خالی باشد'); 
    }
});










// Page_Program_Request_P1
$('#programpart1page_btn').on("tap", function (Event){
    var fullname = $("#programpart1page_input_fullname").val().trim();
    var coach = $("#programpart1page_input_coach").val().trim();
    var meetings = $("#programpart1page_input_meetings").val().trim();
    var Branch = $("#programpart1page_input_Branch").val().trim();
    var date = $("#programpart1page_input_date_request").val().trim();
    var Score = $("#programpart1page_input_Score").val().trim();
    var level = $("#programpart1page_input_level").val().trim();
    var history = $("#programpart1page_input_history").val().trim();
    var height = $("#programpart1page_input_height").val().trim();
    var weight = $("#programpart1page_input_weight").val().trim();
    var age = $("#programpart1page_input_age").val().trim();

    if (fullname.length != 0 ) {
        if (coach.length != 0 ) {
            if (meetings.length != 0 ) {
                if (Branch.length != 0 ) {
                    if (date.length != 0 ) {
                        if (Score.length != 0 ) {
                            if (level.length != 0 ) {
                                if (history.length != 0 ) {
                                    if (height.length != 0){
                                        if (weight.length != 0 ) {
                                            if (age.length != 0 ) {
                                            $.mobile.changePage ('#programpart2page');
                                        }else {
                                        snack_error('سن نمی تواند خالی باشد');
                                    }
                                    }else {
                                        snack_error('وزن نمی تواند خالی باشد');
                                    }
                                }else {
                                    snack_error('قد نمی تواند خالی باشد');
                                }
                            }else {
                                snack_error('سابقه ورزش نمی تواند خالی باشد');
                            }
                        }else {
                            snack_error('سطح برنامه نمی تواند خالی باشد');
                        }
                    }else {
                        snack_error('InBody Score نمی تواند خالی باشد'); 
                    }
                    }else {
                        snack_error('تاریخ درخواست نمی تواند خالی باشد');
                    }
                }else {
                    snack_error('شعبه نمی تواند خالی باشد');
                }
            }else {
                snack_error('تعداد جلسات نمی تواند خالی باشد');
            }
        }else {
            snack_error('نام مربی نمی تواند خالی باشد');
        }
    }else {
        snack_error('نام و نام خانوادگی نمی تواند خالی باشد'); 
    }
});










// Page_Program_Request_P2
$('#programpart2page_btn').on("tap", function (Event){
    var shaneh = $("#programpart1page_input_shaneh").val().trim();
    var sineh = $("#programpart1page_input_sineh").val().trim();
    var kamar = $("#programpart1page_input_kamar").val().trim();
    var shekam = $("#programpart1page_input_shekam").val().trim();
    var basan = $("#programpart1page_input_basan").val().trim();
    var ran = $("#programpart1page_input_ran").val().trim();
    var sagh = $("#programpart1page_input_sagh").val().trim();
    var bazoo = $("#programpart1page_input_bazoo").val().trim();
    var pahlooran = $("#programpart1page_input_pahlooran").val().trim();

    if (shaneh.length != 0 ) {
        if (sineh.length != 0 ) {
            if (kamar.length != 0 ) {
                if (shekam.length != 0 ) {
                    if (basan.length != 0 ) {
                        if (ran.length != 0 ) {
                            if (sagh.length != 0 ) {
                                if (bazoo.length != 0 ) { 
                                if (pahlooran.length != 0 ) { 
                                    $.mobile.changePage ('#programpart3page');
                                }else {
                                    snack_error('سایز پهلوران نمی تواند خالی باشد');
                                }
                                }else {
                                    snack_error('سایز بازو نمی تواند خالی باشد');
                                }
                            }else {
                                snack_error('سایز ساق نمی تواند خالی باشد');
                            }
                        }else {
                            snack_error('سایز ران نمی تواند خالی باشد');
                        }
                    }else {
                        snack_error('سایز باسن نمی تواند خالی باشد');
                    }
                    }else {
                        snack_error('سایز شکم نمی تواند خالی باشد');
                    }
                }else {
                    snack_error('سایز کمر نمی تواند خالی باشد');
                }
            }else {
                snack_error('سایز سینه نمی تواند خالی باشد'); 
            }
        }else {
            snack_error('سایز سرشانه نمی تواند خالی باشد');
        }
});







$(document).on('pageinit', '#programpart2page', function(){ 

    var sharayet_ck_1 = $("#checkbox_sharayet_1").is(":checked");
    var sharayet_ck_2 = $("#checkbox_sharayet_2").is(":checked");
    var sharayet_ck_3 = $("#checkbox_sharayet_3").is(":checked");
    var sharayet_ck_4 = $("#checkbox_sharayet_4").is(":checked");
    var sharayet_ck_5 = $("#checkbox_sharayet_5").is(":checked");
    var sharayet_ck_6 = $("#checkbox_sharayet_6").is(":checked");
    var sharayet_ck_7 = $("#checkbox_sharayet_7").is(":checked");
    var sharayet_ck_8 = $("#checkbox_sharayet_8").is(":checked");
    var sharayet_ck_9 = $("#checkbox_sharayet_9").is(":checked");
    
    var fl_sharayet = document.getElementById('fl_sharayet');
});








// Page_Program_Request_P3    
$('#checkbox_sineh_1').bind('change', function () {
    sineh_form();
});    
$('#checkbox_sineh_2').bind('change', function () {    sineh_form();
});    
$('#checkbox_sineh_3').bind('change', function () {    sineh_form();
});    
$('#checkbox_sineh_4').bind('change', function () {    sineh_form();
});    
$('#checkbox_sineh_5').bind('change', function () {    sineh_form();
});    
$('#checkbox_sineh_6').bind('change', function () {    sineh_form();
});    
$('#checkbox_sineh_7').bind('change', function () {    sineh_form();
});





function sineh_form () {
    var shaneh_ck_1 = $("#checkbox_sineh_1").is(":checked");
    var shaneh_ck_2 = $("#checkbox_sineh_2").is(":checked");
    var shaneh_ck_3 = $("#checkbox_sineh_3").is(":checked");
    var shaneh_ck_4 = $("#checkbox_sineh_4").is(":checked");
    var shaneh_ck_5 = $("#checkbox_sineh_5").is(":checked");
    var shaneh_ck_6 = $("#checkbox_sineh_6").is(":checked");
    var shaneh_ck_7 = $("#checkbox_sineh_7").is(":checked");
    
    
    
    if (shaneh_ck_1 + shaneh_ck_2 + shaneh_ck_3 + shaneh_ck_4 + shaneh_ck_5 + shaneh_ck_6 + shaneh_ck_7 == 3 ) {
        if (shaneh_ck_1 == 0 ) {
            $('#checkbox_sineh_1').prop('disabled', true);
        }
        if (shaneh_ck_2 == 0 ) {
            $('#checkbox_sineh_2').prop('disabled', true);
        }
        if (shaneh_ck_3 == 0 ) {
            $('#checkbox_sineh_3').prop('disabled', true);
        }
        if (shaneh_ck_4 == 0 ) {
            $('#checkbox_sineh_4').prop('disabled', true);
        }
        if (shaneh_ck_5 == 0 ) {
            $('#checkbox_sineh_5').prop('disabled', true);
        }
        if (shaneh_ck_6 == 0 ) {
            $('#checkbox_sineh_6').prop('disabled', true);
        }
        if (shaneh_ck_7 == 0 ) {
            $('#checkbox_sineh_7').prop('disabled', true);
        }
    }else {
            $('#checkbox_sineh_1').prop('disabled', false);
            $('#checkbox_sineh_2').prop('disabled', false);
            $('#checkbox_sineh_3').prop('disabled', false);
            $('#checkbox_sineh_4').prop('disabled', false);
            $('#checkbox_sineh_5').prop('disabled', false);
            $('#checkbox_sineh_6').prop('disabled', false);
            $('#checkbox_sineh_7').prop('disabled', false);
    }
}






    



$("#checkbox_bazoo_1").bind('change', function () { 
    bazoo_form();
});  
$("#checkbox_bazoo_2").bind('change', function () { 
    bazoo_form();
});  
$("#checkbox_bazoo_3").bind('change', function () { 
    bazoo_form();
});  
$("#checkbox_bazoo_4").bind('change', function () { 
    bazoo_form();
});
    




function bazoo_form () {    
    var bazoo_ck_1 = $("#checkbox_bazoo_1").is(":checked");
    var bazoo_ck_2 = $("#checkbox_bazoo_2").is(":checked");
    var bazoo_ck_3 = $("#checkbox_bazoo_3").is(":checked");
    var bazoo_ck_4 = $("#checkbox_bazoo_4").is(":checked");
    
    
    
    if (bazoo_ck_1 + bazoo_ck_2 + bazoo_ck_3 + bazoo_ck_4 == 2 ) {
        if (bazoo_ck_1 == 0 ) {
            $('#checkbox_bazoo_1').prop('disabled', true);
        }
        if (bazoo_ck_2 == 0 ) {
            $('#checkbox_bazoo_2').prop('disabled', true);
        }
        if (bazoo_ck_3 == 0 ) {
            $('#checkbox_bazoo_3').prop('disabled', true);
        }
        if (bazoo_ck_4 == 0 ) {
            $('#checkbox_bazoo_4').prop('disabled', true);
        }
    }else {
            $('#checkbox_bazoo_1').prop('disabled', false);
            $('#checkbox_bazoo_2').prop('disabled', false);
            $('#checkbox_bazoo_3').prop('disabled', false);
            $('#checkbox_bazoo_4').prop('disabled', false);
    }
    
    
}









     
$("#checkbox_shekampahloo_1").bind('change', function () { 
    shekampahloo_form();
}); 
$("#checkbox_shekampahloo_2").bind('change', function () { 
    shekampahloo_form();
}); 
$("#checkbox_shekampahloo_3").bind('change', function () { 
    shekampahloo_form();
});
    




function shekampahloo_form () {
    var shekampahloock_1 = $("#checkbox_shekampahloo_1").is(":checked");
    var shekampahloock_2 = $("#checkbox_shekampahloo_2").is(":checked");
    var shekampahloock_3 = $("#checkbox_shekampahloo_3").is(":checked");
    
    
    
    
    if (shekampahloock_1 + shekampahloock_2 + shekampahloock_3 == 2 ) {
        if (shekampahloock_1 == 0 ) {
            $('#checkbox_shekampahloo_1').prop('disabled', true);
        }
        if (shekampahloock_2 == 0 ) {
            $('#checkbox_shekampahloo_2').prop('disabled', true);
        }
        if (shekampahloock_3 == 0 ) {
            $('#checkbox_shekampahloo_3').prop('disabled', true);
        }
    }else 
            $('#checkbox_shekampahloo_1').prop('disabled', false);
            $('#checkbox_shekampahloo_2').prop('disabled', false);
            $('#checkbox_shekampahloo_3').prop('disabled', false);
    }











$("#checkbox_basan_1").bind('change', function () { 
    basan_form();
});
$("#checkbox_basan_2").bind('change', function () { 
    basan_form();
});
$("#checkbox_basan_3").bind('change', function () { 
    basan_form();
});
$("#checkbox_basan_4").bind('change', function () { 
    basan_form();
});
$("#checkbox_basan_5").bind('change', function () { 
    basan_form();
});
$("#checkbox_basan_6").bind('change', function () { 
    basan_form();
});
$("#checkbox_basan_7").bind('change', function () { 
    basan_form();
});





function basan_form () {
    var basan_ck_1 = $("#checkbox_basan_1").is(":checked");
    var basan_ck_2 = $("#checkbox_basan_2").is(":checked");
    var basan_ck_3 = $("#checkbox_basan_3").is(":checked");
    var basan_ck_4 = $("#checkbox_basan_4").is(":checked");
    var basan_ck_5 = $("#checkbox_basan_5").is(":checked");
    var basan_ck_6 = $("#checkbox_basan_6").is(":checked");
    var basan_ck_7 = $("#checkbox_basan_7").is(":checked");
    
    
    
    if (basan_ck_1 + basan_ck_2 + basan_ck_3 + basan_ck_4 + basan_ck_5 + basan_ck_6 + basan_ck_7 == 3 ) {
        if (basan_ck_1 == 0 ) {
            $('#checkbox_basan_1').prop('disabled', true);
        }
        if (basan_ck_2 == 0 ) {
            $('#checkbox_basan_2').prop('disabled', true);
        }
        if (basan_ck_3 == 0 ) {
            $('#checkbox_basan_3').prop('disabled', true);
        }
        if (basan_ck_4 == 0 ) {
            $('#checkbox_basan_4').prop('disabled', true);
        }
        if (basan_ck_5 == 0 ) {
            $('#checkbox_basan_5').prop('disabled', true);
        }
        if (basan_ck_6 == 0 ) {
            $('#checkbox_basan_6').prop('disabled', true);
        }
        if (basan_ck_7 == 0 ) {
            $('#checkbox_basan_7').prop('disabled', true);
        }
    }else {
            $('#checkbox_basan_1').prop('disabled', false);
            $('#checkbox_basan_2').prop('disabled', false);
            $('#checkbox_basan_3').prop('disabled', false);
            $('#checkbox_basan_4').prop('disabled', false);
            $('#checkbox_basan_5').prop('disabled', false);
            $('#checkbox_basan_6').prop('disabled', false);
            $('#checkbox_basan_7').prop('disabled', false);
    }
}










$("#checkbox_ransagh_1").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_2").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_3").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_4").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_5").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_6").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_7").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_8").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_9").bind('change', function () { 
    ransagh_form();});
$("#checkbox_ransagh_10").bind('change', function () {  
    ransagh_form();});





function ransagh_form () {
    var ransagh_ck_1 = $("#checkbox_ransagh_1").is(":checked");
    var ransagh_ck_2 = $("#checkbox_ransagh_2").is(":checked");
    var ransagh_ck_3 = $("#checkbox_ransagh_3").is(":checked");
    var ransagh_ck_4 = $("#checkbox_ransagh_4").is(":checked");
    var ransagh_ck_5 = $("#checkbox_ransagh_5").is(":checked");
    var ransagh_ck_6 = $("#checkbox_ransagh_6").is(":checked");
    var ransagh_ck_7 = $("#checkbox_ransagh_7").is(":checked");
    var ransagh_ck_8 = $("#checkbox_ransagh_8").is(":checked");
    var ransagh_ck_9 = $("#checkbox_ransagh_9").is(":checked");
    var ransagh_ck_10 = $("#checkbox_ransagh_10").is(":checked");
    
    
    
    if (ransagh_ck_1 + ransagh_ck_2 + ransagh_ck_3 + ransagh_ck_4 + ransagh_ck_5 + ransagh_ck_6 + ransagh_ck_7 + ransagh_ck_8 + ransagh_ck_9 + ransagh_ck_10 == 4 ) {
        if (ransagh_ck_1 == 0 ) {
            $('#checkbox_ransagh_1').prop('disabled', true);
        }
        if (ransagh_ck_2 == 0 ) {
            $('#checkbox_ransagh_2').prop('disabled', true);
        }
        if (ransagh_ck_3 == 0 ) {
            $('#checkbox_ransagh_3').prop('disabled', true);
        }
        if (ransagh_ck_4 == 0 ) {
            $('#checkbox_ransagh_4').prop('disabled', true);
        }
        if (ransagh_ck_5 == 0 ) {
            $('#checkbox_ransagh_5').prop('disabled', true);
        }
        if (ransagh_ck_6 == 0 ) {
            $('#checkbox_ransagh_6').prop('disabled', true);
        }
        if (ransagh_ck_7 == 0 ) {
            $('#checkbox_ransagh_7').prop('disabled', true);
        }
        if (ransagh_ck_8 == 0 ) {
            $('#checkbox_ransagh_8').prop('disabled', true);
        }
        if (ransagh_ck_9 == 0 ) {
            $('#checkbox_ransagh_9').prop('disabled', true);
        }
        if (ransagh_ck_10 == 0 ) {
            $('#checkbox_ransagh_10').prop('disabled', true);
        }
    }else {
            $('#checkbox_ransagh_1').prop('disabled', false);
            $('#checkbox_ransagh_2').prop('disabled', false);
            $('#checkbox_ransagh_3').prop('disabled', false);
            $('#checkbox_ransagh_4').prop('disabled', false);
            $('#checkbox_ransagh_5').prop('disabled', false);
            $('#checkbox_ransagh_6').prop('disabled', false);
            $('#checkbox_ransagh_7').prop('disabled', false);
            $('#checkbox_ransagh_8').prop('disabled', false);
            $('#checkbox_ransagh_9').prop('disabled', false);
            $('#checkbox_ransagh_10').prop('disabled', false);
    }
}










$("#checkbox_pahloran_1").bind('change', function () {
    pahloran_form();});
$("#checkbox_pahloran_2").bind('change', function () {
    pahloran_form();});
$("#checkbox_pahloran_3").bind('change', function () {
    pahloran_form();});
$("#checkbox_pahloran_4").bind('change', function () {
    pahloran_form();});
    




function pahloran_form () {
    var pahloran_ck_1 = $("#checkbox_pahloran_1").is(":checked");
    var pahloran_ck_2 = $("#checkbox_pahloran_2").is(":checked");
    var pahloran_ck_3 = $("#checkbox_pahloran_3").is(":checked");
    var pahloran_ck_4 = $("#checkbox_pahloran_4").is(":checked");
    
   
    
    if (pahloran_ck_1 + pahloran_ck_2 + pahloran_ck_3 + pahloran_ck_4 == 2 ) {
        if (pahloran_ck_1 == 0 ) {
            $('#checkbox_pahloran_1').prop('disabled', true);
        }
        if (pahloran_ck_2 == 0 ) {
            $('#checkbox_pahloran_2').prop('disabled', true);
        }
        if (pahloran_ck_3 == 0 ) {
            $('#checkbox_pahloran_3').prop('disabled', true);
        }
        if (pahloran_ck_4 == 0 ) {
            $('#checkbox_pahloran_4').prop('disabled', true);
        }
    }else {
            $('#checkbox_pahloran_1').prop('disabled', false);
            $('#checkbox_pahloran_2').prop('disabled', false);
            $('#checkbox_pahloran_3').prop('disabled', false);
            $('#checkbox_pahloran_4').prop('disabled', false);
    }
}










$("#checkbox_ketfi_1").bind('change', function () {
    ketfi_form();});
$("#checkbox_ketfi_2").bind('change', function () {
    ketfi_form();});
$("#checkbox_ketfi_3").bind('change', function () {
    ketfi_form();});
$("#checkbox_ketfi_4").bind('change', function () {
    ketfi_form();});
$("#checkbox_ketfi_5").bind('change', function () {
    ketfi_form();});
    




function ketfi_form () {
    var ketfi_ck_1 = $("#checkbox_ketfi_1").is(":checked");
    var ketfi_ck_2 = $("#checkbox_ketfi_2").is(":checked");
    var ketfi_ck_3 = $("#checkbox_ketfi_3").is(":checked");
    var ketfi_ck_4 = $("#checkbox_ketfi_4").is(":checked");
    var ketfi_ck_5 = $("#checkbox_ketfi_5").is(":checked");
    
    
    
    if (ketfi_ck_1 + ketfi_ck_2 + ketfi_ck_3 + ketfi_ck_4 + ketfi_ck_5 == 3 ) {
        if (ketfi_ck_1 == 0 ) {
            $('#checkbox_ketfi_1').prop('disabled', true);
        }
        if (ketfi_ck_2 == 0 ) {
            $('#checkbox_ketfi_2').prop('disabled', true);
        }
        if (ketfi_ck_3 == 0 ) {
            $('#checkbox_ketfi_3').prop('disabled', true);
        }
        if (ketfi_ck_4 == 0 ) {
            $('#checkbox_ketfi_4').prop('disabled', true);
        }
        if (ketfi_ck_5 == 0 ) {
            $('#checkbox_ketfi_5').prop('disabled', true);
        }
    }else {
            $('#checkbox_ketfi_1').prop('disabled', false);
            $('#checkbox_ketfi_2').prop('disabled', false);
            $('#checkbox_ketfi_3').prop('disabled', false);
            $('#checkbox_ketfi_4').prop('disabled', false);
            $('#checkbox_ketfi_5').prop('disabled', false);
    }

}
    
    
    
    
$('#programpart3page_btn').on("tap", function (Event){
    
    
    var shaneh_ck_1 = $("#checkbox_sineh_1").is(":checked");
    var shaneh_ck_2 = $("#checkbox_sineh_2").is(":checked");
    var shaneh_ck_3 = $("#checkbox_sineh_3").is(":checked");
    var shaneh_ck_4 = $("#checkbox_sineh_4").is(":checked");
    var shaneh_ck_5 = $("#checkbox_sineh_5").is(":checked");
    var shaneh_ck_6 = $("#checkbox_sineh_6").is(":checked");
    var shaneh_ck_7 = $("#checkbox_sineh_7").is(":checked");
    
    
    var bazoo_ck_1 = $("#checkbox_bazoo_1").is(":checked");
    var bazoo_ck_2 = $("#checkbox_bazoo_2").is(":checked");
    var bazoo_ck_3 = $("#checkbox_bazoo_3").is(":checked");
    var bazoo_ck_4 = $("#checkbox_bazoo_4").is(":checked");
    
    
    var shekampahloock_1 = $("#checkbox_shekampahloo_1").is(":checked");
    var shekampahloock_2 = $("#checkbox_shekampahloo_2").is(":checked");
    var shekampahloock_3 = $("#checkbox_shekampahloo_3").is(":checked");
    
    
    var basan_ck_1 = $("#checkbox_basan_1").is(":checked");
    var basan_ck_2 = $("#checkbox_basan_2").is(":checked");
    var basan_ck_3 = $("#checkbox_basan_3").is(":checked");
    var basan_ck_4 = $("#checkbox_basan_4").is(":checked");
    var basan_ck_5 = $("#checkbox_basan_5").is(":checked");
    var basan_ck_6 = $("#checkbox_basan_6").is(":checked");
    var basan_ck_7 = $("#checkbox_basan_7").is(":checked");
    
    
    var ransagh_ck_1 = $("#checkbox_ransagh_1").is(":checked");
    var ransagh_ck_2 = $("#checkbox_ransagh_2").is(":checked");
    var ransagh_ck_3 = $("#checkbox_ransagh_3").is(":checked");
    var ransagh_ck_4 = $("#checkbox_ransagh_4").is(":checked");
    var ransagh_ck_5 = $("#checkbox_ransagh_5").is(":checked");
    var ransagh_ck_6 = $("#checkbox_ransagh_6").is(":checked");
    var ransagh_ck_7 = $("#checkbox_ransagh_7").is(":checked");
    var ransagh_ck_8 = $("#checkbox_ransagh_8").is(":checked");
    var ransagh_ck_9 = $("#checkbox_ransagh_9").is(":checked");
    var ransagh_ck_10 = $("#checkbox_ransagh_10").is(":checked");
    
    
    var pahloran_ck_1 = $("#checkbox_pahloran_1").is(":checked");
    var pahloran_ck_2 = $("#checkbox_pahloran_2").is(":checked");
    var pahloran_ck_3 = $("#checkbox_pahloran_3").is(":checked");
    var pahloran_ck_4 = $("#checkbox_pahloran_4").is(":checked");
    
    
    var ketfi_ck_1 = $("#checkbox_ketfi_1").is(":checked");
    var ketfi_ck_2 = $("#checkbox_ketfi_2").is(":checked");
    var ketfi_ck_3 = $("#checkbox_ketfi_3").is(":checked");
    var ketfi_ck_4 = $("#checkbox_ketfi_4").is(":checked");
    var ketfi_ck_5 = $("#checkbox_ketfi_5").is(":checked");

    if (shaneh_ck_1 + shaneh_ck_2 + shaneh_ck_3 + shaneh_ck_4 + shaneh_ck_5 + shaneh_ck_6 + shaneh_ck_7 > 0 ) {
        if (bazoo_ck_1 + bazoo_ck_2 + bazoo_ck_3 + bazoo_ck_4 > 0 ) {
            if (shekampahloock_1 + shekampahloock_2 + shekampahloock_3 > 0 ) {
                if (basan_ck_1 + basan_ck_2 + basan_ck_3 + basan_ck_4 + basan_ck_5 + basan_ck_6 + basan_ck_7 > 0 ) {
                    if (ransagh_ck_1 + ransagh_ck_2 + ransagh_ck_3 + ransagh_ck_4 + ransagh_ck_5 + ransagh_ck_6 + ransagh_ck_7 + ransagh_ck_8 + ransagh_ck_9 + ransagh_ck_10 > 0 ) {
                        if (pahloran_ck_1 + pahloran_ck_2 + pahloran_ck_3 + pahloran_ck_4 > 0 ) {
                            if (ketfi_ck_1 + ketfi_ck_2 + ketfi_ck_3 + ketfi_ck_4 + ketfi_ck_5 > 0 ) {
                                var ref = cordova.InAppBrowser.open('http://apache.org', '_system', 'location=yes');
                        }else {
            snack_error(' بخش عضلات کتفی نمی تواند خالی باشد');
                        }
                    }else {
            snack_error(' بخش پهلوران نمی تواند خالی باشد ');
                    }
                    }else {
            snack_error(' بخش ران و ساق نمی تواند خالی باشد');
                    }
                }else {
            snack_error(' بخش باسن نمی تواند خالی باشد ');
                }
            }else {
            snack_error(' بخش شکم و پهلو نمی تواند خالی باشد');
            }
        }else {
            snack_error(' بخش بازو نمی تواند خالی باشد');
        }
    }else {
            snack_error(' بخش سینه نمی تواند خالی باشد');
    }
});  
    
    
    
    
    
    
    








// Page_GoodToKnow
    
    
    
    
    
    
    








// demo_swiper
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    








// Panel
$('.panel_li_home').on("tap", function (Event){
    $.mobile.changePage('#mainpage');
});
$('.panel_li_profile').on("tap", function (Event){
    $.mobile.changePage('#profilepage');
});
$('.panel_li_good').on("tap", function (Event){
    $.mobile.changePage('#goodtoknowpage');
});
$('.panel_li_singup').on("tap", function (Event){
    $.mobile.changePage('#signuppage');
});
$('.panel_li_request').on("tap", function (Event){
    $.mobile.changePage('#programrequestpage');
});
$('.panel_li_contact').on("tap", function (Event){
    $.mobile.changePage('#contactpage');
});
$('.panel_li_sharess').on("tap", function (Event){// this is the complete list of currently supported params you can pass to the plugin (all optional)
var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram)
  subject: 'the subject', // fi. for email
  files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
//  appPackageName: 'com.apple.social.facebook' // Android only, you can provide id of the App you want to share with
};
 
var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};
 
var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
};
 
window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
});
$('.panel_li_rules').on("tap", function (Event){
    $.mobile.changePage('#rulespage');
});
$('.panel_li_logout').on("tap", function (Event){
    $.mobile.changePage('#rulespage');
});
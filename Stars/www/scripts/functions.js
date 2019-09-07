// Global Var
var HTTP = "";

var random_number = 0;
var phone_number = 0;

var news_id = "";
var output_arr2 = []; 


var shobe_id = 0;
var sans_id = 0;
var jalase_id = 0;

var phone_number_G = 0;

var HTTP = 'http://192.168.1.100:8888/Stars/api/ApiGet/';
var HTTP_img = "http://192.168.1.100:8888/Stars/assets/uploads/files/";



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
$( document ).on( "pageinit", "#contactpage", function() {
    swip_panel("#contactpage");
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
// Page_Program_Request_success Panel 
$( document ).on( "pageinit", "#programsuccesspage", function() {
    swip_panel("#programsuccesspage");
});
// Page_Program_Request_error Panel 
$( document ).on( "pageinit", "#programerrorpage", function() {
    swip_panel("#programerrorpage");
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





// Location BTN
$('.location_btn').on("tap", function (Event){
    $('video').trigger('pause');
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





// Page_Splash
$('#splashpage').on( "pageinit", function( event ) {
    
    setTimeout(function() {
	   if ((window.localStorage.getItem("cookies")) == 1){
            $.mobile.changePage('#mainpage');
        }else {
            $.mobile.changePage('#loginpage');
        }
    }, 1500);
    
});





// Page_login 
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


function randomnumber() {
	random_number =  Math.floor(1000 + Math.random() * 9000);
}


$('#login_btn_submit').on("tap", function (Event){
    phone_number = $("#login_etx_submit").val().trim();
    if (( phone_number.length == 11 ) && ( phone_number.startsWith("09"))) {
        
        window.localStorage.removeItem("phone_num");
        window.localStorage.setItem("phone_num", phone_number);
        phone_number_G = phone_number;
    randomnumber();
        
        get_p();
    $.get("http://api.kavenegar.com/v1/536B754F7573614C6D6D52355367756B312B5A56534F734366544F6E74616B4B5A704A3968786E4D654D593D/sms/send.json?receptor="+phone_number+"&sender=10004346&message="+random_number);
        document.getElementById("sms_etx_submit").value = "";
        alert(random_number);
        $.mobile.changePage('#smspage');
        $('#sms_timer').html("00:05");
        Timer_show();
        $("#profilepage_input_number").value=(phone_number);

    }else {
        snack_error('شماره تماس اشتباه است');
    }
});







function get_p(){
    $.ajax('http://localhost:8888/Stars/api/ApiGet/get_People_single', {
        type: 'POST',  // http method 
        data: { 'phone_number': phone_number, },  // data to submit
        success: function (data, status, xhr) {
          
        $.each (data , function(key, value) {
            
            
        window.localStorage.removeItem("user_id");
        window.localStorage.setItem("user_id", value.people_id);
        });

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        window.localStorage.removeItem("user_id");
        window.localStorage.setItem("user_id", 0);
        }        
    });
                 
}
function ins_p() {
    var user_local = 
        window.localStorage.getItem("user_id");
    
    
    if (user_local == 0){
        $.ajax('http://localhost:8888/Stars/api/ApiGet/insert_people', {
                type: 'POST',  // http method 
                data: { 'name_family': '',
                       'code_meli': '',
                       'phone_number': phone_number,
                       'address': '',
                       'user_date': '',
                       'state_id': '0', },  // data to submit
                success: function (data, status, xhr) {


                },
                error: function (jqXhr, textStatus, errorMessage) {
                        $('p').append('Error' + errorMessage);
                }
            });
        } 
}
// Page_Sms
$('#sms_btn_submit').on("click", function (Event){
    var sms_etx = $("#sms_etx_submit").val().trim();
    if (sms_etx == random_number ) {
          
        
            ins_p(); 
        $("#smspage").prop('disabled', true);
        
        
        
        $.mobile.changePage('#mainpage');
        window.localStorage.removeItem("cookies");
        window.localStorage.setItem("cookies", 1);
        
        
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
    $('#sms_timer').html("00:05"); $.get("http://api.kavenegar.com/v1/536B754F7573614C6D6D52355367756B312B5A56534F734366544F6E74616B4B5A704A3968786E4D654D593D/sms/send.json?receptor="+phone_number+"&sender=10004346&message="+random_number);
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

$( document ).delegate("#locationB1", "pagebeforeshow", function() { 
    $.ajax(HTTP+'get_shobe_single', {
        type: 'POST',  // http method 
        data: { 'shobe_id': '1', },  // data to submit
        success: function (data, status, xhr) {

        var output = "";
        
        $.each (data , function(key, value) {
            
                output += '<div id="image_locationB1" class="locationB1">';
            
                output += '<img id="locationB1_txt_img" src="'+HTTP_img +value.shobe_location_img+'" class="img-responsive"  alt="Image Cant Be Loaded" >';
            
                output += '</div>';
            
            
            
                output += '<div class="locationB1 ">';
            
                output += '<div id="locationB1_txt_dec" class="locationB1_txt">';
            
            
                output += value.shobe_des;
                output += '</div>';
            
                output += '</div>';
            
            
            
            
                output += '</div>';
            
        });
        
        $('#locationB1_place').html(output);
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    });
});





// Page_LocationB2
$('#locationB2_btn').on("tap", function (Event){
    $.mobile.changePage('#locationB1');
});

$( document ).delegate("#locationB2", "pagebeforeshow", function() {
    $.ajax(HTTP+'get_shobe_single', {
        type: 'POST',  // http method 
        data: { 'shobe_id': '2', },  // data to submit
        success: function (data, status, xhr) {

        var output = "";
        
        $.each (data , function(key, value) {
            
                output += '<div id="image_locationB1" class="locationB1">';
            
                output += '<img id="locationB1_txt_img" src="'+HTTP_img + value.shobe_location_img+'" class="img-responsive"  alt="Image Cant Be Loaded" >';
            
                output += '</div>';
            
            
            
                output += '<div class="locationB1 ">';
            
            
                output += '<div id="locationB1_txt_dec" class="locationB1_txt">';
            
            
                output += value.shobe_des;
                output += '</div>';
            
                output += '</div>';
            
            
            
                output += '</div>';
        });
        
        $('#locationB2_place').html(output);
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    });
});










// Page_Main
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

function getLast(array,x){return array.slice(array.length-x)}





$('#main_btn_sans').on("click", function (Event){
    $.mobile.changePage('#sanspage');
});
$('#main_btn_signup').on("click", function (Event){
    $.mobile.changePage('#signuppage');
});
$('#main_btn_sugestion').on("click", function (Event){
    $.mobile.changePage('#contactpage');
});
$('#main_btn_news').on("click", function (Event){
    $.mobile.changePage('#allnewspage');
});
$('#main_btn_articles').on("click", function (Event){
    $.mobile.changePage('#articlespage');
});
$('#main_btn_introduction').on("click", function (Event){
    $.mobile.changePage('#introductionpage');
});
$('#main_logout_btn').on("click", function (Event){
    navigator.app.exitApp();
        window.localStorage.removeItem("cookies");
        window.localStorage.setItem("cookies", 0);
});


$( document ).delegate("#mainpage", "pagebeforeshow", function() { 
   
     $.ajax(HTTP+'get_main_slider_list', {
        type: 'GET',  // http method   // data to submit
    success: function (data, status, xhr) {

        var output = "";
        
        $.each (data , function(key, value) {
            
                output += '<div class="swiper-slide">';
                
            
                output += '<img src="' +HTTP_img+value.image_url+'" alt="Image Cant Be Loaded" >';
            
                output += '<p>'+ value.img_title +'</p>';
            
            
                output += '</div>';
        });
        
        $('#main_swiper-wrapper').html(output);

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
       
    }); 
});






$( document ).delegate("#mainpage", "pagebeforeshow", function() {
   
        var output_arr = []; 
    $.ajax(HTTP+'get_news_list', {
        type: 'GET',  // http method   // data to submit
    success: function (data, status, xhr) {
                    
        $.each (data , function(key, value) {
            output_arr.push(value.news_id);
            output_arr.push(value.news_title);
            output_arr.push(value.news_text);
            output_arr.push(value.news_date);
            
        });
        
        
        
        var output = "";
            
    for(i=output_arr.length-1;i>output_arr.length-18;i-=4){
        
            
                output += ' <li data-id="'+output_arr[i-3]+'">';
                
            
                output += '<a type="button" class="ui-btn ui-btn-left ui-btn-icon-center ui-icon-leftdouble ui-btn-icon-notext ui-corner-all btn_toolbar2 location_btn">Location</a>';
            
                output += '<p>'+ output_arr[i-1] +'</p>';
            
            
                output += '</li>';
        
    }
    
        $('#mainpage_list').html(output);
        
        
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
       
    }); 
    
    
    

    
    
    
    
});










$( document ).on( "pagebeforeshow", "#mainpage", function($) {
    setTimeout(function() {
	swiper_main("updateSliderSize", true);
    }, 300);
});

$('#mainpage_list').delegate("li","click", function (event) {
    var selected = $(this);
    news_id = selected.attr("data-id");
    $.mobile.changePage('#newspage');
});












// Page_Sans
$('#sans_btn_B1').on("tap", function (){
    shobe_id = 1;
    $.mobile.changePage('#choosesanspage');
});
$('#sans_btn_B2').on("tap", function (){
    shobe_id = 2;
    $.mobile.changePage('#choosesanspage');
});










// Page_ChooseSans
$( document ).delegate("#choosesanspage", "pagebeforeshow", function() { 
    $.ajax(HTTP+'get_sans_single', {
        type: 'POST',  // http method 
        data: { 'shobe_id': shobe_id, },  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        
        $.each (data , function(key, value) {
            
                output += '<li data-id="'+value.sans_id+'">';
                
                output += '<div class="chooseclasspageـgride ">';
                
                output += '<div class="circle_choose_1">';
                output += '<div class="circle_choose_inner_1">';
                output += '</div>';
            
                output += '</div>';
            
                output += '<div class="chooseclasspage_1 " >';
                
                
                output += '<span>';
                
                output += value.sans_text;
            
                output += '</span>';
                
                output += '</div>';
            
            
                
                output += '<div class="circle_choose_2">';
                output += '<div class="circle_choose_inner_2">';
                output += '</div>';
            
                output += '</div>';
            
                output += '</div>';
                
                output += '</li>';
        });
        
        $('#choosesanspage_list').html(output);

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
 
});






$( document ).delegate("#choosesanspage", "pageinit", function() {
  setTimeout(function(){ $("#choosesanspage_list").on("click", "li", function() {
        var selected = $(this);
        sans_id = selected.attr("data-id");
        $.mobile.changePage('#chooseclasspage');
    }); }, 1000);
});







        


// Page_ChooseClass
var morabi_name = "" ;



function video_fun(jalase_id){
     $.ajax(HTTP+'get_jalase_video_list', {
        type: 'POST',  // http method 
        data: { 'jalase_id': jalase_id, },  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        $.each (data , function(key, value) {
            
                output += '<div class="swiper-slide">';
                
                
                output += '<video width="100%" height="250" controls>';
                
                output += '<source src="'+ HTTP_img + value.video_url +'" type="video/mp4">';
            
            
            
                output += "Your browser does not support the video tag.";
                
                output += '</video>';
                
                
                output += '</div>';
        
           
        });
        

        $('#swiper-wrapper_id').html(output);
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
}
function days_name_fun(jalase_id){
     $.ajax(HTTP+'get_jalase_day_single', {
        type: 'POST',  // http method 
        data: { 'jalase_id': jalase_id, },  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        $.each (data , function(key, value) {
            
                output += '<div class="workout_grid ui-grid-a c_text_align">';
                
                
                output += '<div class="ui-block-a">';
                
                output += '<div class=" ui-bar ui-bar-a p0" >';
                output += value.jalase_day_title;
                output += '</div>';
                
                output += '</div>';
                
                
                output += '<div class="ui-block-b">';
                output += value.jalase_day_time;
                output += '</div>';
                
                output += '</div>';
                
                
                output += '</div>';
        
           
        });
        

        $('#day_time_workout').html(output);
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
}


$( document ).delegate("#chooseclasspage", "pagebeforeshow", function() { 

    $.ajax(HTTP+'get_jalase_list', {
        type: 'POST',  // http method 
        data: { 'sans_id': sans_id, },  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        
        $.each (data , function(key, value) {
            
            
                output += '<li data-id="'+value.jalase_id+'">';
                
                output += '<div class="chooseclasspageـgride ui-grid-a">';
                
            
            
                output += '<div class="chooseclasspage_3 ui-block-a" style="font-size: 120%;">';
                output += '<span>';
                output += value.jalase_title;
                output += '</span>';
                output += '</div>';
            
            
                output += '<div class="chooseclasspage_2 ui-block-b">';
                output += '<span>';
                output += value.jalase_time;
                output += '</span>';
                output += '</div>';
            
            
            
                output += '</div>';
            
            
                
                output += '<div class="chooseclasspageـgride ui-grid-a">';
                
            
            
                output += '<div class="chooseclasspage_3 ui-block-a">';
                output += '<span>';
                output += value.jalase_day;
                output += '</span>';
                output += '</div>';
            
            
                output += '<div class="chooseclasspage_4 ui-block-b">';
                output += '<span>';
                output += value.morabi_name;
                output += '</span>';
                output += '</div>';
            
            
            
                output += '</div>';
                
                output += '</li>';
        });
        
        $('#chooseclasspage_list').html(output);

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
       
    }); 
});


$( document ).delegate("#chooseclasspage", "pageinit", function() {
    $("#chooseclasspage_list").on("click", "li", function() {
        var selected = $(this);
         jalase_id= selected.attr("data-id");
        $.mobile.changePage('#workoutpage');
    });
});









// Page_WorkOut
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


$( document ).delegate("#workoutpage", "pagebeforehide", function() {
            $('video').trigger('pause');
});


$( document ).delegate("#workoutpage", "pagebeforeshow", function() { 
    $.ajax(HTTP+'get_jalase_single', {
        type: 'POST',  // http method 
        data: { 'jalase_id': jalase_id, },  // data to submit
    success: function (data, status, xhr) {
        
        var img_src = "";
        
        $.each (data , function(key, value) {
            
            document.getElementById("img_workout_page").src = HTTP_img +value.jalase_img_avatar;
            document.getElementById("workout_morabi_name").innerHTML = "مربی : " + value.morabi_name;
            
            days_name_fun(value.jalase_id);
            video_fun(value.jalase_id);
           document.getElementById("workout_explain_dec").innerHTML = value.jalase_des ;
        });
        

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
 
});


$( document ).on( "pageinit", "#workoutpage", function($) {
    setTimeout(function() {
	swiper("updateSliderSize", true);
    }, 300);
});


$('#workout_rate_btn').on("tap", function (Event){
    $('video').trigger('pause');
    
    var rate_1 = $("#radio_rate_1").is(":checked");
    var rate_2 = $("#radio_rate_2").is(":checked");
    var rate_3 = $("#radio_rate_3").is(":checked");
    var rate_4 = $("#radio_rate_4").is(":checked");
    var rate_5 = $("#radio_rate_5").is(":checked");
    
    var rate_send = 0;
    
    if (rate_1 == 1 ) {
        rate_send= 1;
    }
    if (rate_2 == 1 ) {
        rate_send= 2;
    }
    if (rate_3 == 1 ) {
        rate_send= 3;
    }
    if (rate_4 == 1 ) {
        rate_send= 4;
    }
    if (rate_5 == 1 ) {
        rate_send= 5;
    }
        
    if (rate_1 + rate_2 + rate_3 + rate_4 + rate_5 == 1 ) {
        snack_success('امتیاز شما برای این بخش ارسال شد'); 
       
        
    var people_id = 
        window.localStorage.getItem("user_id");
    var jalase_id = 
        window.localStorage.getItem("user_id");
                                
$.ajax(HTTP+'insert_rate', {
    type: 'POST',  // http method
    data: { 'people_id': people_id,
           'jalase_id': jalase_id,
           'rate': rate_send, },  // data to submit
    success: function (data, status, xhr) {

    },
    error: function (jqXhr, textStatus, errorMessage) {
            $('p').append('Error' + errorMessage);
    }
});
                                
                   
        
        
    }else {
        snack_error('ابتدا امتیاز دهید'); 
    }
});


$('#workout_btn').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#signuppage');
});


function rate_form () {
    var rate_1 = $("#radio_rate_1").is(":checked");
    var rate_2 = $("#radio_rate_2").is(":checked");
    var rate_3 = $("#radio_rate_3").is(":checked");
    var rate_4 = $("#radio_rate_4").is(":checked");
    var rate_5 = $("#radio_rate_5").is(":checked");
    
    
    
    if (rate_1 + rate_2 + rate_3 + rate_4 + rate_5 == 1 ) {
        if (rate_1 == 0 ) {
            $('#radio_rate_1').prop('disabled', true);
        }
        if (rate_2 == 0 ) {
            $('#radio_rate_2').prop('disabled', true);
        }
        if (rate_3 == 0 ) {
            $('#radio_rate_3').prop('disabled', true);
        }
        if (rate_4 == 0 ) {
            $('#radio_rate_4').prop('disabled', true);
        }
        if (rate_5 == 0 ) {
            $('#radio_rate_5').prop('disabled', true);
        }
    }else {
            $('#radio_rate_1').prop('disabled', false);
            $('#radio_rate_2').prop('disabled', false);
            $('#radio_rate_3').prop('disabled', false);
            $('#radio_rate_4').prop('disabled', false);
            $('#radio_rate_5').prop('disabled', false);
    }

}
$('#radio_rate_1').bind('change', function () {
    rate_form();
}); 
$('#radio_rate_2').bind('change', function () {
    rate_form();
}); 
$('#radio_rate_3').bind('change', function () {
    rate_form();
}); 
$('#radio_rate_4').bind('change', function () {
    rate_form();
}); 
$('#radio_rate_5').bind('change', function () {
    rate_form();
});  










// Page_Contact
$('#contactpage_btn').on("click", function (Event){
    var user_local = 
        window.localStorage.getItem("user_id");
    var contact_etx_title = $("#cotactpage_input").val().trim();
    var contact_etx = $("#cotactpage_textarea").val().trim();

    if (contact_etx_title.length != 0 ) {
        if (contact_etx.length != 0 ) {
            $.ajax(HTTP+'insert_contact', {
                type: 'POST',  // http method
                data: { 'people_id': user_local,
                       'contact_title': contact_etx_title,
                       'conatct_text': contact_etx,
                       'contact_date': 'date', },  // data to submit
                success: function (data, status, xhr) {

                },
                error: function (jqXhr, textStatus, errorMessage) {
                        $('p').append('Error' + errorMessage);
                }
            });
        
        snack_success('ارسال انجام شد با تشکر از توجه شما');
        }else {
        snack_error('متن ارسالــی نمی تواند خالی باشد'); 
        }
    }else {
        snack_error('عنوان متن ارسالــی نمی تواند خالی باشد'); 
    }
    
   
});










// Page_AllNews
var news_article = 0;

$( document ).delegate("#allnewspage", "pagebeforeshow", function() { 
    $.ajax(HTTP+'get_news_list', {
        type: 'GET',  // http method  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        
        $.each (data , function(key, value) {
                output += '<li data-id="'+value.news_id+'">';
                
                output += '<div class="allnewspageـgride ">';
                output += '<div class="allnewspage_li_name ">';
                output += '<a href="#" class="ui-btn ui-btn-right ui-icon-leftdouble_Purple ui-btn-icon-notext ui-corner-all btn_toolbar leftdouble_btn"></a>';
                
                output += '<p> '+ value.news_title +' </p>';
                
                output += '</div>';
                
                output += '<span class="allnewspage_li_date ">';
                
                output += value.news_date;
            
                output += '</span>';
                
                output += '</div>';
                
                output += '</li>';
        });
        
        $('#allnewspage_list').html(output);

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
 
});



$('#allnewspage_list').delegate("li","click", function (event) {
    var selected = $(this);
    news_id = selected.attr("data-id");
    $.mobile.changePage('#newspage');
});










// Page_Article
$( document ).delegate("#articlespage", "pagebeforeshow", function() { 
    $.ajax(HTTP+'get_article_list', {
        type: 'GET', // http method  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        $.each (data , function(key, value) {
                news_article = 1;
                output += '<li data-id="'+value.article_id+'">';
                
                output += '<div class="allnewspageـgride ">';
                output += '<div class="allnewspage_li_name ">';
                output += '<a href="#" class="ui-btn ui-btn-right ui-icon-leftdouble_Purple ui-btn-icon-notext ui-corner-all btn_toolbar leftdouble_btn"></a>';
                
                output += '<p> '+ value.article_name +' </p>';
                
                output += '</div>';
                
                output += '<span class="allnewspage_li_date ">';
                
                output += value.article_date;
            
                output += '</span>';
                
                output += '</div>';
                
                output += '</li>';
        });
        
        $('#articlespage_list').html(output);

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
 
});
$('#articlespage_list').delegate("li","tap", function (event) {
    var selected = $(this);
    news_id = selected.attr("data-id");
    $.mobile.changePage('#newspage');
});









// Page_GoodToKnow
$( document ).delegate("#goodtoknowpage", "pagebeforeshow", function() { 
    $.ajax(HTTP+'get_good_to_know_list', {
        type: 'GET',  // http method  // data to submit
    success: function (data, status, xhr) {

        var output = "";
        $.each (data ,function(key, value) {
                news_article = 2;
                output += '<li data-id="'+value.good_id+'">';
                
                output += '<div class="good_img">';
            
                output += '<img src="' + HTTP_img + value.gtk_image+'" alt="Image Cant Be Loaded" >';
                
                output += '</div>';
                
                output += '<div class="good_txt">';
            
                output += '<p>'+value.gtk_title+'</p>';
                
                output += '</div>';
                
                output += '</li>';
        }
        );
        
        $('#goodtoknowpage_list').html(output);

        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
 
});
$( document ).delegate("#goodtoknowpage", "pageinit", function() {
  setTimeout(function(){ $("#goodtoknowpage_list").on("click", "li", function() {
        var selected = $(this);
        news_id = selected.attr("data-id");
        $.mobile.changePage('#newspage');
    }); }, 1000);
});
    
    
    
    
    
    
    




// Page_News
$( document ).delegate("#newspage", "pagebeforeshow", function() {
    
    if (news_article == 0 ){
        $.ajax(HTTP+'get_news_single', {
        type: 'POST',  // http method
        data: { 'news_id': news_id, },   // data to submit
    success: function (data, status, xhr) {

        $.each(data, function(index) {
        document.getElementById("main_tilte_news").innerHTML = data[index].news_title;
        document.getElementById("news_text").innerHTML = data[index].news_text;
        });
    },
    error: function (jqXhr, textStatus, errorMessage) {
            $('p').append('Error' + errorMessage);
    }
});
        
    }
    
    
    
    
    if (news_article == 1 ){
        
        $.ajax(HTTP+'get_article_single', {
        type: 'POST',  // http method
        data: { 'article_id': news_id, },   // data to submit
    success: function (data, status, xhr) {
//        $('p').append('status: ' + status + ', data: ' + data);
        $.each(data, function(index) {
        document.getElementById("main_tilte_news").innerHTML = data[index].article_name;
        document.getElementById("news_text").innerHTML = data[index].article_text;
        });
    },
    error: function (jqXhr, textStatus, errorMessage) {
            $('p').append('Error' + errorMessage);
    }
});
    }
    
    
    
    
    
    if (news_article == 2 ){
        
        $.ajax(HTTP+'get_good_to_know_single', {
        type: 'POST',  // http method
        data: { 'good_id': news_id, },   // data to submit
    success: function (data, status, xhr) {
//        $('p').append('status: ' + status + ', data: ' + data);
        $.each(data, function(index) {
        document.getElementById("main_tilte_news").innerHTML = data[index].gtk_title;
        document.getElementById("news_text").innerHTML = data[index].gtk_text;
        });
    },
    error: function (jqXhr, textStatus, errorMessage) {
            $('p').append('Error' + errorMessage);
    }
});
    }
});










// Page_Introduction 
function image_top_intro(introduction_id){
    $.ajax(HTTP+'get_introduction_images_list', {
        type: 'POST',  // http method 
        data: { 'introduction_id': introduction_id, },  // data to submit
    success: function (data, status, xhr) {

        var output_big = "";
        $.each (data , function(key, value) {
            
                output_big += '<div class="swiper-slide image_big">';
                
                output_big += '<img src="' + HTTP_img + value.img_url+'" alt="Image Cant Be Loaded" >';
                
                output_big += '</div>';
            
            
        });

        $('#intro_top_gallery').html(output_big);
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
}
function image_down_intro(introduction_id){
    $.ajax(HTTP+'get_introduction_images_list', {
        type: 'POST',  // http method 
        data: { 'introduction_id': introduction_id, },  // data to submit
    success: function (data, status, xhr) {

        var output_small = "";
        $.each (data , function(key, value) {
            
                output_small += '<div class="swiper-slide image_small">';
                
                output_small += '<img src="' + HTTP_img + value.img_url+'" alt="Image Cant Be Loaded" >';
                
                output_small += '</div>';
        });

        $('#intro_down_gallery').html(output_small);
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
}
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


$( document ).on( "pagebeforeshow", "#introductionpage", function($) {
    setTimeout(function() {
	galleryThumb("updateSliderSize", true);
    }, 300);
});

$( document ).delegate("#introductionpage", "pagebeforeshow", function() {
    $.ajax(HTTP+'get_introduction_list', {
        type: 'GET',  // http method  // data to submit
        success: function (data, status, xhr) {

        $.each (data , function(key, value) {
            document.getElementById("moarefi_p_txt").innerHTML = value.introduction_text;
                
           image_top_intro(value.introduction_id);
           image_down_intro(value.introduction_id);
            });
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    });
});





// Page_SignUp
$('#signuppage_btn').on("click", function (Event){
    var fullname = $("#singup_input_fullname").val().trim();
    var socialcode = $("#singup_input_social_code").val().trim();
    var phonenumber = $("#singup_input_number").val().trim();
    var address = $("#singup_txtarea_address").val().trim();

    if (fullname.length != 0 ) {
        if (socialcode.length != 0 ) {
            if (phonenumber.length != 0 ) {
                if (address.length != 0 ) {

                    
                    snack_success('درخواست شما ارسال شد');
                     
    $.ajax(HTTP+'update_people', {
        type: 'POST',  // http method 
        data: { 'name_family': fullname,
               'code_meli': socialcode,
               'address': address,
               'phone_number': phonenumber, },  // data to submit
        success: function (data, status, xhr) {
           
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    });
                    
                    
                    
                    
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





// Request VAR
var bimary = "";
var asib = "";
var sabeghe = "";
var regime = "";
var desceription = "";

var fullname = "";
var coach = "";
var meetings = "";
var Branch = "";
var date = "";
var Score = "";
var level = "";
var history_s = "";
var height = "";
var weight = "";
var age = "";

var shaneh = "";
var sineh = "";
var kamar = "";
var shekam = "";
var basan = "";
var ran = "";
var sagh = "";
var bazoo = "";
var pahlooran = "";

var sharayet_ck_11 = "";
var sharayet_ck_22 = "";
var sharayet_ck_33 = "";
var sharayet_ck_44 = "";
var sharayet_ck_55 = "";
var sharayet_ck_66 = "";
var sharayet_ck_77 = "";
var sharayet_ck_88 = "";
var sharayet_ck_99 = "";

var shaneh_ck_11 = "";
var shaneh_ck_22 = "";
var shaneh_ck_33 = "";
var shaneh_ck_44 = "";
var shaneh_ck_55 = "";
var shaneh_ck_66 = "";
var shaneh_ck_77 = "";

var bazoo_ck_11 = "";
var bazoo_ck_22 = "";
var bazoo_ck_33 = "";
var bazoo_ck_44 = "";

var shekampahloock_11 = "";
var shekampahloock_22 = "";
var shekampahloock_33 = "";

var basan_ck_11 = "";
var basan_ck_22 = "";
var basan_ck_33 = "";
var basan_ck_44 = "";
var basan_ck_55 = "";
var basan_ck_66 = "";
var basan_ck_77 = "";

var ransagh_ck_11 = "";
var ransagh_ck_22 = "";
var ransagh_ck_33 = "";
var ransagh_ck_44 = "";
var ransagh_ck_55 = "";
var ransagh_ck_66 = "";
var ransagh_ck_77 = "";
var ransagh_ck_88 = "";
var ransagh_ck_99 = "";
var ransagh_ck_1010 = "";

var pahloran_ck_11 = "";
var pahloran_ck_22 = "";
var pahloran_ck_33 = "";
var pahloran_ck_44 = "";

var ketfi_ck_11 = "";
var ketfi_ck_22 = "";
var ketfi_ck_33 = "";
var ketfi_ck_44 = "";
var ketfi_ck_55 = "";





// Page_Program_Request
$('#programrequestpage_btn').on("tap", function (Event){
    bimary = $("#programrequestpageinput_bimary").val().trim();
    asib = $("#programrequestpage_input_asib").val().trim();
    sabeghe = $("#programrequestpage_input_sabeghe").val().trim();
    regime = $("#programrequestpage_input_regime").val().trim();
    desceription = $("#programrequestpage_input_desceription").val().trim();

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
$('#programpart1page_btn').on("click", function (Event){
    fullname = $("#programpart1page_input_fullname").val().trim();
    meetings = $("#programpart1page_input_meetings").val().trim();
    Branch = $("#programpart1page_input_Branch").val().trim();
    date = $("#programpart1page_input_date_request").val().trim();
    Score = $("#programpart1page_input_Score").val().trim();
    level = $("#programpart1page_input_level").val().trim();
    history_s = $("#programpart1page_input_history").val().trim();
    height = $("#programpart1page_input_height").val().trim();
    weight = $("#programpart1page_input_weight").val().trim();
    age = $("#programpart1page_input_age").val().trim();

    if (fullname.length != 0 ) {
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
        snack_error('نام و نام خانوادگی نمی تواند خالی باشد'); 
    }
});




// Page_Program_Request_P2
$('#programpart2page_btn').on("tap", function (Event){
    shaneh = $("#programpart1page_input_shaneh").val().trim();
    sineh = $("#programpart1page_input_sineh").val().trim();
    kamar = $("#programpart1page_input_kamar").val().trim();
    shekam = $("#programpart1page_input_shekam").val().trim();
    basan = $("#programpart1page_input_basan").val().trim();
    ran = $("#programpart1page_input_ran").val().trim();
    sagh = $("#programpart1page_input_sagh").val().trim();
    bazoo = $("#programpart1page_input_bazoo").val().trim();
    pahlooran = $("#programpart1page_input_pahlooran").val().trim();

    if (shaneh.length != 0 ) {
        if (sineh.length != 0 ) {
            if (kamar.length != 0 ) {
                if (shekam.length != 0 ) {
                    if (basan.length != 0 ) {
                        if (ran.length != 0 ) {
                            if (sagh.length != 0 ) {
                                if (bazoo.length != 0 ) { 
                                if (pahlooran.length != 0 ) { 
                                    
                                    
    
    var sharayet_ck_1 = $("#checkbox_sharayet_1").is(":checked");
    var sharayet_ck_2 = $("#checkbox_sharayet_2").is(":checked");
    var sharayet_ck_3 = $("#checkbox_sharayet_3").is(":checked");
    var sharayet_ck_4 = $("#checkbox_sharayet_4").is(":checked");
    var sharayet_ck_5 = $("#checkbox_sharayet_5").is(":checked");
    var sharayet_ck_6 = $("#checkbox_sharayet_6").is(":checked");
    var sharayet_ck_7 = $("#checkbox_sharayet_7").is(":checked");
    var sharayet_ck_8 = $("#checkbox_sharayet_8").is(":checked");
    var sharayet_ck_9 = $("#checkbox_sharayet_9").is(":checked");
                                    
    if(sharayet_ck_1 == 1){
        sharayet_ck_11="بله";
    }else{
        sharayet_ck_11="خیر";
    }                              
    if(sharayet_ck_2 == 1){
        sharayet_ck_22="بله";
    }else{
        sharayet_ck_22="خیر";}                               
    if(sharayet_ck_3 == 1){
        sharayet_ck_33="بله";
    }else{
        sharayet_ck_33="خیر";}                               
    if(sharayet_ck_4 == 1){
        sharayet_ck_44="بله";
    }else{
        sharayet_ck_44="خیر";}                           
    if(sharayet_ck_5 == 1){
        sharayet_ck_55="بله";
    }else{
        sharayet_ck_55="خیر";}                                 
    if(sharayet_ck_6 == 1){
        sharayet_ck_66="بله";
    }else{
        sharayet_ck_66="خیر";}                                 
    if(sharayet_ck_7 == 1){
        sharayet_ck_77="بله";
    }else{
        sharayet_ck_77="خیر";}                                
    if(sharayet_ck_8 == 1){
        sharayet_ck_88="بله";
    }else{
        sharayet_ck_88="خیر";}                            
    if(sharayet_ck_9 == 1){
        sharayet_ck_99="بله";
    }else{
        sharayet_ck_99="خیر";}  
                                    
                                    
                                    
                                    
                                    
                                    
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
    
    
        if (shaneh_ck_1 == 0 ) {
            shaneh_ck_11="خیر";
        }else{
            shaneh_ck_11="بله";
    }    
        if (shaneh_ck_2 == 0 ) {
            shaneh_ck_22="خیر";
        }else{
            shaneh_ck_22="بله";
    }    
        if (shaneh_ck_3 == 0 ) {
            shaneh_ck_33="خیر";
        }else{
            shaneh_ck_33="بله";
    }    
        if (shaneh_ck_4 == 0 ) {
            shaneh_ck_44="خیر";
        }else{
            shaneh_ck_44="بله";
    }    
        if (shaneh_ck_5 == 0 ) {
            shaneh_ck_55="خیر";
        }else{
            shaneh_ck_55="بله";
    }    
        if (shaneh_ck_6 == 0 ) {
            shaneh_ck_66="خیر";
        }else{
            shaneh_ck_66="بله";
    }    
        if (shaneh_ck_7 == 0 ) {
            shaneh_ck_77="خیر";
        }else{
            shaneh_ck_77="بله";
    } 
    
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
    
    
        if (bazoo_ck_1 == 0 ) {
            bazoo_ck_11="خیر";
        }else{
            bazoo_ck_11="بله";
    }  
        if (bazoo_ck_2 == 0 ) {
            bazoo_ck_22="خیر";
        }else{
            bazoo_ck_22="بله";
    }  
        if (bazoo_ck_3 == 0 ) {
            bazoo_ck_33="خیر";
        }else{
            bazoo_ck_33="بله";
    }  
        if (bazoo_ck_4 == 0 ) {
            bazoo_ck_44="خیر";
        }else{
            bazoo_ck_44="بله";
    } 
    
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
    
    
        if (shekampahloock_1 == 0 ) {
            shekampahloock_11="خیر";
        }else{
            shekampahloock_11="بله";
    }  
        if (shekampahloock_2 == 0 ) {
            shekampahloock_22="خیر";
        }else{
            shekampahloock_22="بله";
    }  
        if (shekampahloock_3 == 0 ) {
            shekampahloock_33="خیر";
        }else{
            shekampahloock_33="بله";
    }  
    
    
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
    
    
        if (basan_ck_1 == 0 ) {
            basan_ck_11="خیر";
        }else{
            basan_ck_11="بله";
    }  
        if (basan_ck_2 == 0 ) {
            basan_ck_22="خیر";
        }else{
            basan_ck_22="بله";
    }  
        if (basan_ck_3 == 0 ) {
            basan_ck_33="خیر";
        }else{
            basan_ck_33="بله";
    }  
        if (basan_ck_4 == 0 ) {
            basan_ck_44="خیر";
        }else{
            basan_ck_44="بله";
    }  
        if (basan_ck_5 == 0 ) {
            basan_ck_55="خیر";
        }else{
            basan_ck_55="بله";
    }  
        if (basan_ck_6 == 0 ) {
            basan_ck_66="خیر";
        }else{
            basan_ck_66="بله";
    }  
        if (basan_ck_7 == 0 ) {
            basan_ck_77="خیر";
        }else{
            basan_ck_77="بله";
    } 
    
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
    
    
        if (ransagh_ck_1 == 0 ) {
            ransagh_ck_11="خیر";
        }else{
            ransagh_ck_11="بله";
    }  
        if (ransagh_ck_2 == 0 ) {
            ransagh_ck_22="خیر";
        }else{
            ransagh_ck_22="بله";
    }  
        if (ransagh_ck_3 == 0 ) {
            ransagh_ck_33="خیر";
        }else{
            ransagh_ck_33="بله";
    }  
        if (ransagh_ck_4 == 0 ) {
            ransagh_ck_44="خیر";
        }else{
            ransagh_ck_44="بله";
    }  
        if (ransagh_ck_5 == 0 ) {
            ransagh_ck_55="خیر";
        }else{
            ransagh_ck_55="بله";
    }  
        if (ransagh_ck_6 == 0 ) {
            ransagh_ck_66="خیر";
        }else{
            ransagh_ck_66="بله";
    }  
        if (ransagh_ck_7 == 0 ) {
            ransagh_ck_77="خیر";
        }else{
            ransagh_ck_77="بله";
    }  
        if (ransagh_ck_8 == 0 ) {
            ransagh_ck_88="خیر";
        }else{
            ransagh_ck_88="بله";
    }  
        if (ransagh_ck_9 == 0 ) {
            ransagh_ck_99="خیر";
        }else{
            ransagh_ck_99="بله";
    }  
        if (ransagh_ck_10 == 0 ) {
            ransagh_ck_1010="خیر";
        }else{
            ransagh_ck_1010="بله";
    }  
    
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
    
   
        if (pahloran_ck_1 == 0 ) {
            pahloran_ck_11="خیر";
        }else{
            pahloran_ck_11="بله";
    }  
        if (pahloran_ck_2 == 0 ) {
            pahloran_ck_22="خیر";
        }else{
            pahloran_ck_22="بله";
    }  
        if (pahloran_ck_3 == 0 ) {
            pahloran_ck_33="خیر";
        }else{
            pahloran_ck_33="بله";
    }  
        if (pahloran_ck_4 == 0 ) {
            pahloran_ck_44="خیر";
        }else{
            pahloran_ck_44="بله";
    }
    
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
    
    
    
    
        if (ketfi_ck_1 == 0 ) {
            ketfi_ck_11="خیر";
        }else{
            ketfi_ck_11="بله";
    }  
        if (ketfi_ck_2 == 0 ) {
            ketfi_ck_22="خیر";
        }else{
            ketfi_ck_22="بله";
    }  
        if (ketfi_ck_3 == 0 ) {
            ketfi_ck_33="خیر";
        }else{
            ketfi_ck_33="بله";
    }  
        if (ketfi_ck_4 == 0 ) {
            ketfi_ck_44="خیر";
        }else{
            ketfi_ck_44="بله";
    }  
        if (ketfi_ck_5 == 0 ) {
            ketfi_ck_55="خیر";
        }else{
            ketfi_ck_55="بله";
    } 
    
    
    
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
                                

    var user_local = 
        window.localStorage.getItem("user_id");
                                
$.ajax(HTTP+'insert_request', {
    type: 'POST',  // http method
    data: { 'people_id': user_local,
           'morabi_id': "",
           'state_id': 0,
           'jalasat_number': meetings,
           'shobe': Branch,
           'request_date': date,
           'inbody_score': Score,
           'level': level,
           'history_sport': history_s,
           'ghad': height,
           'vazn': weight,
           'age': age,
           'sar_shane': shaneh,
           'sine': sineh,
           'kamar': kamar,
           'bimary': bimary,
           'mafasel': asib,
           'other_gym': sabeghe,
           'regim': regime,
           'other_des': desceription,
           'shekam': shekam,
           'basan': basan,
           'ran': ran,
           'sagh_pa': sagh,
           'bazo': bazoo,
           'pahlooran': pahlooran,
           'lor_dozegi_gardan': sharayet_ck_11,
           'lor_dozegi_kamari': sharayet_ck_33,
           'charkh_zano':sharayet_ck_77 ,
           'ketf_baldar': sharayet_ck_99,
           'kifoz_poshti': sharayet_ck_22,
           'pa_parantezi': sharayet_ck_44,
           'pa_zabdari': sharayet_ck_55,
           'oftadegi_shane': sharayet_ck_66,
           'skoliuz': sharayet_ck_88,
           'sine_bala_keshidan': shaneh_ck_11,
           'sine_hajm': shaneh_ck_22,
           'sine_seft_shodan': shaneh_ck_33,
           'sine_form_giry': shaneh_ck_44,
           'sine_kahesh_size': shaneh_ck_55,
           'sine_gerd_shodan': shaneh_ck_66,
           'sine_por_shodan_bala_sine': shaneh_ck_77,
           'bazo_form_giry': bazoo_ck_11,
           'bazo_por_shodan': bazoo_ck_22,
           'bazo_kahesh_size': bazoo_ck_33,
           'bazo_seft_shodan': bazoo_ck_44,
           'shekam_pahlo_charbi_sozi': shekampahloock_11,
           'shekam_pahlo_taghviat_azolat': shekampahloock_22,
           'shekam_pahlo_kat_shodan': shekampahloock_33,
           'basan_gerd_shodan': basan_ck_11,
           'basan_bala_keshidan': basan_ck_22,
           'basan_seft_shodan': basan_ck_33,
           'basan_hajm_por_shodan': basan_ck_44,
           'basan_por_shodan_baghal_basan': basan_ck_55,
           'basan_kahesh_size': basan_ck_66,
           'basan_form_giry': basan_ck_77,
           'ran_o_sagh_por_shodan': ransagh_ck_11,
           'ran_o_sagh_seft_shodan': ransagh_ck_22,
           'ran_o_sagh_form_giry': ransagh_ck_33,
           'ran_o_sagh_taghviat_azolat': ransagh_ck_44,
           'ran_o_sagh_rafe_seloliat': ransagh_ck_55,
           'ran_o_sagh_kahesh_size': ransagh_ck_66,
           'ran_o_sagh_kahesh_size_sagh': ransagh_ck_77,
           'ran_o_sagh_seft_shodan_sagh': ransagh_ck_88,
           'ran_o_sagh_taghviat_sagh': ransagh_ck_99,
           'ran_o_sagh_charbi_sozi': ransagh_ck_1010,
           'pahlo_ran_charbi_sozi': pahloran_ck_11,
           'pahlo_ran_form_giri': pahloran_ck_22,
           'pahlo_ran_taghviat': pahloran_ck_33,
           'pahlo_ran_por_shodan': pahloran_ck_44,
           'azolat_ketfi_taghviat': ketfi_ck_11,
           'azolat_ketfi_form_giri': ketfi_ck_22,
           'azolat_ketfi_kahesh_size': ketfi_ck_33,
           'azolat_ketfi_aghab_raftan_shaneh': ketfi_ck_44,
           'azolat_ketfi_kat_shodan': ketfi_ck_55,
           'price_barname': "60000",
           'request_des': desceription },  // data to submit
    success: function (data, status, xhr) {

    },
    error: function (jqXhr, textStatus, errorMessage) {
            $('p').append('Error' + errorMessage);
    }
});
                                
                                
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

    








// Page_Profile

$('#profilepage_btn').on("click", function (){
    var name_family = $("#profilepage_input_fullname").val().trim();
    var code_meli = $("#profilepage_input_social_code").val().trim();
    
    $.ajax(HTTP+'update_people', {
        type: 'POST',  // http method 
        data: { 'name_family': name_family,
               'code_meli': code_meli,
               'address': '',
               'phone_number': phone_number_single, },  // data to submit
        success: function (data, status, xhr) {
           
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    }); 
    snack_success("اطلاعات کاربری به روز رسانی شد");
});
    








// Page_Rules
$( document ).delegate("#rulespage", "pagebeforeshow", function() { 
        $.ajax(HTTP+'get_rules_list', {
        type: 'GET',  // http method  // data to submit
    success: function (data, status, xhr) {
//        $('p').append('status: ' + status + ', data: ' + data);
        $.each(data, function(index) {
        document.getElementById("rulespage_txt").innerHTML = data[index].rules_text;
        });
    },
    error: function (jqXhr, textStatus, errorMessage) {
            $('p').append('Error' + errorMessage);
    }
});
});


    
    
    
    
    
    








// Panel
$('.panel_li_home').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#mainpage');
});
$('.panel_li_profile').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#profilepage'); 
    var phone = window.localStorage.getItem("phone_num");
    document.getElementById("profilepage_input_number").value = window.localStorage.getItem("phone_num");
    
    $.ajax(HTTP+'get_People_single', {
        type: 'POST',  // http method 
        data: { 'phone_number': phone, },  // data to submit
        success: function (data, status, xhr) {

        $.each (data , function(key, value) {                document.getElementById("profilepage_input_fullname").value = value.name_family;
           
        document.getElementById("profilepage_input_social_code").value = value.code_meli; 

            });
        },
        error: function (jqXhr, textStatus, errorMessage) {
                $('p').append('Error' + errorMessage);
        }
    });
    
    
});
$('.panel_li_good').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#goodtoknowpage');
});
$('.panel_li_singup').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#signuppage');
});
$('.panel_li_request').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#programrequestpage');
});
$('.panel_li_contact').on("tap", function (Event){
    $('video').trigger('pause');
    $.mobile.changePage('#contactpage');
});
$('.panel_li_sharess').on("tap", function (Event){
    $('video').trigger('pause');
    // this is the complete list of currently supported params you can pass to the plugin (all optional)
    var options = {
    message: 'Download Stars App', // not supported on some apps (Facebook, Instagram)
    subject: 'Download Here', // fi. for email
    files: ['', ''], // an array of filenames either locally or remotely
    url: 'https://dw.uptodown.com/dwn/4g8cngy0x9rLHHq16KZY9-mdXX098kYpkJV7Ag7C-DUKCTkKDTYwB6phXhmrMbCYhanP36dr6FXWxI98pQS4t9kEV_eycsegFHjgyo4CGv85B-zAFFUwFyl7g1EKF4xt/L_ySn9ptVUT0zgvbl5fphzRFTKPUKF3bdsgXpPAyomhSHNoLTvRNtDinvczHneKSC-DMu0WRf168J_3eEn7edLH6j64voyGrJB7C_drOvQapOKEF82n4ktncuse10SUp/cj7BBy6Ux7Fo8GJNRVs83w==/',
    chooserTitle: 'https://dw.uptodown.com/dwn/4g8cngy0x9rLHHq16KZY9-mdXX098kYpkJV7Ag7C-DUKCTkKDTYwB6phXhmrMbCYhanP36dr6FXWxI98pQS4t9kEV_eycsegFHjgyo4CGv85B-zAFFUwFyl7g1EKF4xt/L_ySn9ptVUT0zgvbl5fphzRFTKPUKF3bdsgXpPAyomhSHNoLTvRNtDinvczHneKSC-DMu0WRf168J_3eEn7edLH6j64voyGrJB7C_drOvQapOKEF82n4ktncuse10SUp/cj7BBy6Ux7Fo8GJNRVs83w==/' // Android only, you can override the default share sheet title,
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
    $('video').trigger('pause');
    $.mobile.changePage('#rulespage');
});
$('.panel_li_logout').on("tap", function (Event){
    navigator.app.exitApp();
        window.localStorage.removeItem("cookies");
        window.localStorage.removeItem("phone_num");
        window.localStorage.removeItem("user_id");
});
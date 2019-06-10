// Jquery EVENTS

$( document ).on( "pageinit", "#page2", function() {
    $( document ).on( "swipeleft", "#page2", function( e ) {
        if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swipeleft"  ) {
                $( "#panel1" ).panel( "open" );
            }
        }
    });
});





// page Login
$('#login_btn_submit').on("tap", function (Event){
    var etx_txt = $("#login_btnt_submit").val();
    if (( etx_txt.length == 11 ) && ( etx_txt.startsWith("09"))) {
    $.mobile.changePage('#pagesms');
    }else {
        
    }
});


// page SMS
$('#sms_btn_again').on("tap", function (Event){
   
});

$('#sms_btn_submit').on("tap", function (Event){
    var etx_txt = $("#sms_etx_verify").val();
    if (( etx_txt.length == 4 ) ) {
    $.mobile.changePage('#page2');
    }else {
        
    }
});
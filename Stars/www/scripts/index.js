// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints,
// and then run "window.location.reload()" in the JavaScript Console.
var jquery_mobile_demo;
(function (jquery_mobile_demo) {
    "use strict";

    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;

        function onDeviceReady() {
            
            navigator.splashscreen.show();
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            document.addEventListener('orientation', orientation, false);
            document.addEventListener("backbutton", onBackKeyPress, false);
            document.addEventListener('online', ononline, false);
            document.addEventListener('offline', onoffline, false);
            document.addEventListener('deviceready',    function() {
                setTimeout(function() {
                    navigator.splashscreen.hide(); 
	               if ((window.localStorage.getItem("cookies")) == 1){
                        $.mobile.changePage('#mainpage');
                    }else {
                        $.mobile.changePage('#loginpage');
                }
                }, 1500);                     
            });
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }

        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }

        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }

        function ononline() {
            var snack = new Snackbar();
            snack.success("ارتباط برقرار شد");
            // TODO: This application has been reactivated. Restore application state here.
        }

        function onoffline() {
            var snack = new Snackbar();
            snack.error("ارتباط برقرار نشد");
            // TODO: This application has been reactivated. Restore application state here.
        }
              
//        function onBackKeyPress() {
//            
//            $('video').trigger('pause');
//            /* If the current page is the login page, disable the button completely (aka do nothing) */;
////            if( ($.mobile.activePage.attr('id')) == ("mainpage")  ) {
////                
////                e.preventDefault();
////                return false;
////            }
//
//            }
        
        
        function orientation() {
            screen.orientation.lock('portrait');
            // TODO: This application has been suspended. Save application state here.
        }

        
        
        
    })(jquery_mobile_demo.Application || (jquery_mobile_demo.Application = {}));
    var Application = jquery_mobile_demo.Application;

    window.onload = function () {
        Application.initialize();
    };
})(jquery_mobile_demo || (jquery_mobile_demo = {}));
//# sourceMappingURL=index.js.map

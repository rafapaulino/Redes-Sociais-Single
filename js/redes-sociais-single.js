(function (window, document, $, undefined) {
    'use strict';

    var redesSingle = (function () {

        var $private = {};
        var $public = {};
        var $myWindow;

        $public.initRedesSingle = function() {
            $( window ).on("load", function() {


                $('.popup').on('click',function(event){
                    event.preventDefault();
                    var $this = $(this);
                    var $url = $this.attr('href');

                    $private.openPopUp($url,'');
                });

                $('.print').on('click', function(event){
                    event.preventDefault();
                    window.print();
                });
            });              
        };

        $private.openPopUp = function($url, $name) {
            var $width = 320;
            var $height = 320;
            var $left = (screen.width/2)-($width/2);
            var $top = (screen.height/2)-($height/2);
            var $parameters = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + $width + ', height=' + $height + ', top=' + $top +', left=' + $left;

            $myWindow = window.open($url,$name,$parameters);  
            if (window.focus) {$myWindow.focus()};
        };

        return $public;
    })();

    // Global
    window.redesSingle = redesSingle;
    redesSingle.initRedesSingle();
})(window, document, jQuery);


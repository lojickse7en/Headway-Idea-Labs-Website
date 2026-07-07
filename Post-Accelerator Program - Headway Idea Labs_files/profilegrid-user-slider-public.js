 (function ($) {
     
 var slider_id = $('#slider_id_user').val();
 var classess = '.'+slider_id;
var size = $(classess +'.slick-active').outerWidth();
        $(classess + '.pg-user-slider').width(size).height(size);
        $(classess + 'img').width(size).height(size);
      //alert(slider_id);
      var pmDomColor = jQuery(".pg-user-slider").find("a").css('color');
        jQuery(".pg-user-slider .slick-arrow").css('color', pmDomColor);
      
      })(jQuery);
      
      
(function ($) {
    
})(jQuery);
jQuery(window).load(function () {
    jQuery("div #pg_group_slider").find('input[type=hidden]').each(function (i) {
        var slider_id = jQuery('div #pg_group_slider  #slider_id').val();
        var classess = '.' + jQuery(this).val();
        var size = jQuery(classess + ' .pg-slick-slide').outerWidth();
        jQuery(classess + ' img.pm-group-badge ').width(size).height(size);
        jQuery(classess + ' .pg-slider-group-badge img.pm-group-badge ').width(size).height(size);
        jQuery(classess + '.pg-slider-group-badge ').width(size).height(size);
        jQuery(classess + '.pg-group-slider-wrap').width(size).height(size);
    });

    //var pmDomColor = jQuery("body").find("a").css('color');
    //jQuery(".pg-group-slider .slick-arrow").css('color', pmDomColor);
});
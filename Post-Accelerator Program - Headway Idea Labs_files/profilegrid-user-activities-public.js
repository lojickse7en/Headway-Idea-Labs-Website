//jQuery(function(){
// var tickerLength = jQuery('.pg-user-activities ul li').length;
//  var tickerHeight = jQuery('.pg-user-activities ul li').outerHeight();
//  jQuery('.pg-user-activities ul li:first-child').prependTo('.pg-user-activities ul');
//  jQuery('.pg-user-activities ul').css('marginBottom',-tickerHeight);
//  function moveBottom(){
//    jQuery('.pg-user-activities ul').animate({
//      bottom : -tickerHeight
//    },600, function(){
//     jQuery('.pg-user-activities ul li:last-child').appendTo('.pg-user-activities ul');
//      jQuery('.pg-user-activities ul').css('bottom','');
//    });
//   }
//
//if (jQuery('.pg-user-activities ul li').length > 5) 
//  setInterval( function(){
//    jQuery('.pg-user-activities ul').css('marginBottom',0);   
//    moveBottom();
//  }, 3000);
//  });
// 
// 

 (function(a){a.fn.vTicker=function(b){var c={speed:700,pause:4000,showItems:10,animation:"",mousePause:true,isPaused:false,direction:"up",height:0};var b=a.extend(c,b);moveUp=function(g,d,e){if(e.isPaused){return}var f=g.children("ul");var h=f.children("li:first").clone(true);if(e.height>0){d=f.children("li:first").height()}f.animate({top:"-="+d+"px"},e.speed,function(){a(this).children("li:first").remove();a(this).css("top","0px")});if(e.animation=="fade"){f.children("li:first").fadeOut(e.speed);if(e.height==0){f.children("li:eq("+e.showItems+")").hide().fadeIn(e.speed)}}h.appendTo(f)};moveDown=function(g,d,e){if(e.isPaused){return}var f=g.children("ul");var h=f.children("li:last").clone(true);if(e.height>0){d=f.children("li:first").height()}f.css("top","-"+d+"px").prepend(h);f.animate({top:0},e.speed,function(){a(this).children("li:last").remove()});if(e.animation=="fade"){if(e.height==0){f.children("li:eq("+e.showItems+")").fadeOut(e.speed)}f.children("li:first").hide().fadeIn(e.speed)}};return this.each(function(){var f=a(this);var e=0;f.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:0,padding:0});if(b.height==0){f.children("ul").children("li").each(function(){if(a(this).height()>e){e=a(this).height()}});f.children("ul").children("li").each(function(){a(this).height(e)});f.height(e*b.showItems)}else{f.height(b.height)}var d=setInterval(function(){if(b.direction=="up"){moveUp(f,e,b)}else{moveDown(f,e,b)}},b.pause);if(b.mousePause){f.bind("mouseenter",function(){b.isPaused=true}).bind("mouseleave",function(){b.isPaused=false})}})}})(jQuery);
//
// jQuery(function(){
//   var showactivity = 0 ;
//   if (jQuery('.pg-activities-box ul').children("li").length > 0 )
//   {
//        showactivity = jQuery('.pg-activities-box ul').children("li").length ;
//   }
//   
//   
//    jQuery('.pg-activities-box').vTicker({ 
//    speed: 300,
//   pause: 3000,
//   showItems: showactivity,
//   animation: 'fade',
//   mousePause: true,
//   direction: 'down',
//    height: 0,
//
//	});
//});



jQuery( document ).ready(function() {
    
if ( jQuery('.profilegrid_user_activities .pg-user-activities ul li').length == 0){
     jQuery('.profilegrid_user_activities .pg-user-activities').addClass('pg-no-activities-slide');
}else if ( jQuery('.pg-user-activities ul li').length > 1){
    
    jQuery('.profilegrid_user_activities .pg-user-activities').addClass('pg-activities-slide-stop');
    
}else{
    
    jQuery('.profilegrid_user_activities .pg-user-activities').addClass('pg-activities-slide');
 }
});


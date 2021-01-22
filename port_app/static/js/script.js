
// Fly in
var timer = 0;
function recheck() {
    var window_top = $(this).scrollTop();
    var window_height = $(this).height();
    var view_port_s = window_top;
    var view_port_e = window_top + window_height;
    
    if ( timer ) {
      clearTimeout( timer );
    }
    
    $('.fly').each(function(){
      var block = $(this);
      var block_top = block.offset().top;
      var block_height = block.height();
      
      if ( block_top < view_port_e ) {
        timer = setTimeout(function(){
          block.addClass('show-block');
        },100);       
      } else {
        timer = setTimeout(function(){
          block.removeClass('show-block');
        },100);          
      }
    });
}

$(function(){
  $(window).scroll(function(){
    recheck();
  });
  
  $(window).resize(function(){
     recheck();   
  });
  
  recheck();
});

$(document).ready(function() {

  //Button Scroll
  $("#about_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
  });

  $("#projects_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
  });

  $("#contact_button").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 2000);
  });

});
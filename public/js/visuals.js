// http://codepen.io/dcdev/pen/HFoxh
// Header fade scroll
// A PEN BY David Condrey
$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
      $('.header').addClass('scrolled');
    } else {
      $('.header').removeClass('scrolled');
    };
  });

});
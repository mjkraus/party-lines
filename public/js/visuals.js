  // http://codepen.io/dcdev/pen/HFoxh
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

  //FIND OUT HOW TO FADE FROM BLACK 

  //   $(window).scroll(function() {
  //   if ($(window).scrollTop() > 50) {
  //     $('#try').addClass('scrolled');
  //   } else {
  //     $('#try').removeClass('scrolled');
  //   };
  // });




});
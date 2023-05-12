$(function() {
    let header = $('.header__fixed');
     
    $(window).scroll(function() {
      if($(this).scrollTop() > 150) {
       header.addClass('header__background');
      } else {
       header.removeClass('header__background');
      }
    });
   });
   
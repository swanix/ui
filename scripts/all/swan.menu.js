$(document).ready(function(){
  $('.menu-mobile-button,.menu-mobile-fade-screen,.menu-mobile-close').on('click touchstart',function (e) {
    $('.menu-mobile,.menu-mobile-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});

$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width <= 768){
       $('#menu-main').removeClass('menu').addClass('menu-mobile');
   }
   else{
       $('#menu-main').removeClass('menu-mobile').addClass('menu');
   }
})
.resize();
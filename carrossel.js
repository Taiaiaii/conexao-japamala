$(document).ready(function(){
var owl = $('.carrossel');
owl.owlCarousel({
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:4,
          nav:true,
          loop:false
      }
  },
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1800,
    autoplayHoverPause:true
});
  });




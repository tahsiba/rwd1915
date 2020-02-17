$(function(){
// counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
//feedbac slider
$('.feedback-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
}); 
// navbare bg    
$(window).scroll(function(){
var scrolling = $(this).scrollTop();
if(scrolling >200){
    $('.navbar').addClass('bg');
}
else{
    $('.navbar').removeClass('bg');
}
    
});  
//animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});
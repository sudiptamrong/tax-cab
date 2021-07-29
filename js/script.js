// Sticky Class Add & Remove
$(window).on('scroll', function(){
    if ($(window).scrollTop()){
        $('nav').addClass('sticky');
    }
    else{
        $('nav').removeClass('sticky');
    }
})


// AutoHide Scroll Down/up
document.addEventListener("DOMContentLoaded", function(){

    el_autohide = document.querySelector('.autohide');
    
    if(el_autohide){
      var last_scroll_top = 0;
      window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
           if(scroll_top < last_scroll_top) {
                el_autohide.classList.remove('scrolled-down');
                el_autohide.classList.add('scrolled-up');
            }
            else {
                el_autohide.classList.remove('scrolled-up');
                el_autohide.classList.add('scrolled-down');
            }
            last_scroll_top = scroll_top;
      });
    }
  
  }); 


// Swiper Start
var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      speed: 5000,
      autoplay: {
        enabled: true,
        delay: 1,
      },
    });


// Media Query for Swiper Slider
const mediaQuery = window.matchMedia('(max-width: 767.98px)')
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
  else{
      var swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
      });
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)



// AOS Js for Scroll Up & Down animation
AOS.init({
  offset: 120,
  duration: 800,
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hero-slider-list__item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


    const 
    cart = document.querySelector('.cart-trigger');
    close= document.querySelector('.cart-btn');
   search = document.querySelector('.search-trigger');
   exit= document.querySelector('.search-btn');
   menu= document.querySelector('.menu-trigger');
    menuexit = document.querySelector('.close-menu');



 cart.addEventListener('click', () => {
     document.querySelector('.minicart').classList.remove('visualy-hidden');
   });
 close.addEventListener('click', () => {
     document.querySelector('.minicart').classList.add('visualy-hidden');
   })
  
search.addEventListener('click', () => {
    document.querySelector('.search-form').classList.remove('visualy-hidden');
  });
 exit.addEventListener('click', () => {
     document.querySelector('.search-form').classList.add('visualy-hidden');
   })

 menu.addEventListener('click', () => {
     document.querySelector('nav').classList.remove('visualy-hidden');
   });
 menuexit.addEventListener('click', () => {
     document.querySelector('nav').classList.add('visualy-hidden');
   })
// Swiper code

var swiper = new Swiper(".swiper", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Navbar functinalities

var menuBtn = document.querySelector('.menu-btn');
var navLinksWrapper = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    menuBtn.classList.toggle('active');
    navLinksWrapper.classList.toggle('active');
};

for(var i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', toggleMenu)
};
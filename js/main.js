var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },

      breakpoints: {
        600: {
          slidesPerView: 2,
        }
      }
});

document.getElementById("btn").onclick = function() {
  document.getElementById("menu-mob").classList.toggle("mobile-menu-active");
  document.getElementById("btn").classList.toggle("menu-button-active");
};



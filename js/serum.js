let swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  speed: 2000,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    0: {
      slidesPerView: 2,
    },
  },
});

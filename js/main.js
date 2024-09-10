let swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000,
  },
  speed: 2000,
  effect: "slide",
});

jQuery(".player").YTPlayer();

const header = document.querySelector(".main_header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 500) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

document.addEventListener("scroll", function () {
  const header = document.querySelector(".main_header");
  if (window.scrollY > 200) {
    // 스크롤이 50px 이상일 때
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

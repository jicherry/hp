let swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  speed: 2000,
  effect: "fade",
});

jQuery(".player").YTPlayer();

// $(".favorite_pink img").mouseover(function() {
//   var src = $(this).attr("src");

//   if(src == "./images/pink_back.jpg") {
//     $(this).attr("src", "./images/pink.jpg");
//   } else {
//     $(this).attr("src", "./images/pink_back.jpg");
//   }
// });

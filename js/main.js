const swiper = new Swiper(".reviews-slider", {

  slidesPerView: 2,
  spaceBetween: 22,
  loop: true,

  navigation: {
    nextEl: ".reviews__item-next",
    prevEl: ".reviews__item-prev",
  },
});

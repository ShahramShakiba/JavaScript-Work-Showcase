// Get Slider-Content container
const swiper = new Swiper('.slide-content', {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: false,

  // centers the current slide and makes it the main slide
  centerSlide: true,

  // fade effect when transitioning between slides
  fade: true,
  grabCursor: true,

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // left and right swiper
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // break-points of different size of screens
  breakpoints: {
    0: {
      slidesPerView: 3,
    },

    520: {
      slidesPerView: 2,
    },

    950: {
      slidesPerView: 3,
    },

    1280: {
      slidesPerView: 4,
    },
  },
});

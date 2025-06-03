let swiperBanner = new Swiper('.mySwiper-banner', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.mySwiper-banner-next',
    prevEl: '.mySwiper-banner-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
let swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.mySwiper1-next',
    prevEl: '.mySwiper1-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

let swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: '.mySwiper2-next',
    prevEl: '.mySwiper2-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});

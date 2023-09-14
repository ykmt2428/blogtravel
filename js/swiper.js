/* swiperJS処理 */
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,  
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  },
  breakpoints: {
    640: {
      slidesPerView: 2 ,
    },
  },

});
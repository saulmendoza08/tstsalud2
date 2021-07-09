import firma from "./modules/firma.js";
import navScroll from "./modules/nav.js";
import showCard from "./modules/show_card.js";

const d = document;

d.addEventListener('DOMContentLoaded',e=>{

    navScroll("nav");
    showCard();
    firma()

})




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2.5,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },speed:2000
      });

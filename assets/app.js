import aside from "./modules/aside.js";
import firma from "./modules/firma.js";
import hamburguer from "./modules/hamburguer.js";
import loading from "./modules/load.js";
import navScroll from "./modules/nav.js";
import showCard from "./modules/show_card.js";

const d = document;

d.addEventListener('DOMContentLoaded',e=>{

    navScroll("nav");
    showCard();
    firma();
    aside();
    hamburguer();
  

})

loading();


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: {
            slidesPerView: 1.1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 1.1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 50,
          },
        },speed:2000
      });

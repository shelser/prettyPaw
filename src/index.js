import './index.html';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.scss';
import { slidersInit } from './modules/slider';

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
});

slidersInit('.career__slider', {
    breakpoints: {
    // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                enabled: true  // включено на мобильных
            }
        },
    // when window width is >= 480px
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
                enabled: false  // включено на мобильных
            }
        },
    // when window width is >= 640px
        1240: {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
                enabled: false  // включено на мобильных
            }
        },
    },   
    pagination: {
        el: '.career__slider-pagination',
    }
})

const videoBG = document.querySelector('.video-bg');

videoBG.innerHTML = `
    <source src="video/video.webm" type="video/webm">
    <source src="video/video.mp4" type="video/mp4">
`;
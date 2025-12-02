import './index.html';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.scss';
import { slidersInit } from './modules/slider';
import { videoBackgroundInit } from './modules/videoBackground';
import { menuControl } from './modules/menuControl';

videoBackgroundInit();
menuControl();

slidersInit('.about__slider', {
    pagination: {
        el: '.about__slider-pagination',
    }
});

slidersInit('.career__slider', {
    breakpoints: {
        320: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: true
         },
        768: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            pagination: false,
        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 26,
            pagination: false,
        },
        1240: {
            slidesPerView: 'auto',
            spaceBetween: 30,
            pagination: false,
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
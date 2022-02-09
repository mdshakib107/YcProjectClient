import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import BannerSlide1 from './BannerSlide/BannerSlide1';
import BannerSlide2 from './BannerSlide/BannerSlide2';
import BannerSlide3 from './BannerSlide/BannerSlide3';


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><BannerSlide1></BannerSlide1></SwiperSlide>
                <SwiperSlide><BannerSlide2></BannerSlide2></SwiperSlide>
                <SwiperSlide><BannerSlide3></BannerSlide3></SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;
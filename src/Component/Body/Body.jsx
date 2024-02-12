import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../../assets/1.jpg';
import slide2 from '../../assets/2.jpg';
import slide3 from '../../assets/3.jpg';
import slide4 from '../../assets/4.jpg';
import slide5 from '../../assets/5.jpg';
import slide6 from '../../assets/6.jpg';
import slide7 from '../../assets/7.jpg';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        loop="true"
        slidesPerView={4}
        speed={3000}
      >
        <SwiperSlide>
          <img src={slide1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

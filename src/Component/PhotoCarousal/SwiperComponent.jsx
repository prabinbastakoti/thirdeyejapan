import { Swiper, SwiperSlide } from 'swiper/react';

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
  return (
    <>
      <div className="hidden md:block">
        <Swiper
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          loop="true"
          slidesPerView={3}
          speed={6000}
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
      </div>
    </>
  );
};

export default SwiperComponent;

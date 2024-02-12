// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import slide1 from '../../assets/1.jpg';
import slide2 from '../../assets/2.jpg';
import slide3 from '../../assets/3.jpg';
import slide4 from '../../assets/4.jpg';
import slide5 from '../../assets/5.jpg';
import slide6 from '../../assets/6.jpg';
import slide7 from '../../assets/7.jpg';

const Body = () => {
  return (
    <swiper-container loop="true" speed="500" slides-per-view="3">
      <swiper-slide>
        <img src={slide1} />
      </swiper-slide>
      <swiper-slide>
        <img src={slide2} />
      </swiper-slide>
      <swiper-slide>
        <img src={slide3} />
      </swiper-slide>
      <swiper-slide>
        <img src={slide4} />
      </swiper-slide>
      <swiper-slide>
        <img src={slide5} />
      </swiper-slide>
      <swiper-slide>
        <img src={slide6} />
      </swiper-slide>
      <swiper-slide>
        <img src={slide7} />
      </swiper-slide>
    </swiper-container>
  );
};

export default Body;

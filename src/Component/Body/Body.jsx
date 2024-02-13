import SwiperComponent from './Swiper';
import AboutUs from './AboutUs';
import Services from './Services';

const Body = () => {
  return (
    <div className="">
      <SwiperComponent />
      <div className="px-20">
        <AboutUs />
        <Services />
      </div>
    </div>
  );
};

export default Body;

import SwiperComponent from './Swiper';
import AboutUs from './AboutUs';
import Services from './Services';
import FAQs from './FAQs';

const Body = () => {
  return (
    <div className="">
      <SwiperComponent />
      <div className="px-20">
        <AboutUs />
        <Services />
        <FAQs />
      </div>
    </div>
  );
};

export default Body;

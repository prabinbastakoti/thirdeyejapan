import SwiperComponent from './Swiper';
import AboutUs from './AboutUs';
import Services from './Services';
import FAQs from './FAQs';
import Gallery from './Gallery';
import SiteContent from './SiteContent';

const Body = () => {
  return (
    <div className="">
      <SwiperComponent />
      <div className="px-20 mb-28">
        <AboutUs />
        <Services />
        <FAQs />
      </div>
      <Gallery />
      <div className="px-20">
        <SiteContent />
      </div>
    </div>
  );
};

export default Body;

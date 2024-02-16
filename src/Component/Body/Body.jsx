import SwiperComponent from './Swiper';
import AboutUs from './AboutUs';
import Services from './Services';
import FAQs from './FAQs';
import Gallery from './Gallery';
import SiteContent from './SiteContent';
import Social from './Social';
import Instructors from './Instructors';
import ContactUs from './ContactUs';

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
        <Social />
        <Instructors />
        <ContactUs />
      </div>
    </div>
  );
};

export default Body;

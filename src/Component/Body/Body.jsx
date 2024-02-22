import SwiperComponent from './Swiper';
import AboutUs from './AboutUs';
import Services from './Services/Services';
import FAQs from './FAQs/FAQs';
import Gallery from './Gallery';
import SiteContent from './SiteContent/SiteContent';
import Social from './Social';
import Instructors from './Instructors';
import ContactUs from './ContactUs/ContactUs';

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

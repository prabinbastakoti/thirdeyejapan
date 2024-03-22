import AboutUs from './AboutUs';
import Services from './Services/Services';
import FAQs from './FAQs/FAQs';
import Gallery from './Gallery';
import SiteContent from './SiteContent/SiteContent';
import Social from './Social';
import Instructors from './Instructors';
import ContactUs from './ContactUs/ContactUs';
import Carousal from './Carousal';
import Footer from './Footer';

const Body = () => {
  return (
    <>
      <Carousal />
      <div className="">
        <div className="px-20 my-28">
          <Services />
        </div>
        <AboutUs />
        <div className="px-20 mb-28">
          <FAQs />
        </div>
        <Gallery />
        <div className="px-20 pb-10">
          <SiteContent />
        </div>
        <Social />
        <div className="px-20 pb-10">
          <Instructors />
          <ContactUs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Body;

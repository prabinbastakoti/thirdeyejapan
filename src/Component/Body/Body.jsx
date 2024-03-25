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
import { useEffect, useState } from 'react';
import axios from 'axios';

const Body = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiResponse = axios.get(
      'https://d-web-web.onrender.com/api/menu/65fd1778b32d92184b5ecfae'
    );

    apiResponse.then((response) => {
      setData(response.data.data[0]);
    });
    apiResponse.catch((error) => {
      console.log(error);
    });
  }, []);

  if (Object.keys(data).length < 1) {
    return <div>Loading.........</div>;
  }

  return (
    <>
      <Carousal data={data} />
      <div className="">
        <div className="px-4 md:px-20 md:my-28 mt-10 mb-28">
          <Services data={data} />
        </div>
        <AboutUs data={data} />
        <div className="px-4 md:px-20 mb-28">
          <FAQs data={data} />
        </div>
        <Gallery data={data} />
        <div className="px-4 md:px-20 pb-10">
          <SiteContent data={data} />
        </div>
        <Social data={data} />
        <div className="px-4 md:px-20 pb-10">
          <Instructors data={data} />
          <ContactUs data={data} />
          <Footer data={data} />
        </div>
      </div>
    </>
  );
};

export default Body;

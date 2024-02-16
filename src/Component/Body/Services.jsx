import SingleService from './SingleService';
import Service1 from '../../assets/services1.webp';
import Service2 from '../../assets/services2.webp';
import Service3 from '../../assets/services3.webp';
import HeadingTitle from '../HeadingTitle';

const Services = () => {
  const content = [
    {
      heading: 'Our Purpose: Guiding Educational Journeys for a Bright Future',
      paragraph:
        "At Third Eye Educational Center Pvt. Ltd., our purpose is to be your steadfast companion on the intricate path of educational exploration. As a beacon of guidance, we're committed to shedding light on the possibilities that lie beyond borders. From offering enriching Japanese language classes to meticulously handling documentation, our offline and online services work in harmony to provide a comprehensive and holistic experience. We're not just consultants; we're partners in your pursuit of a brighter tomorrow. ",
    },
    {
      heading:
        'Future Outlook: Crafting Educational Horizons through Collaboration',
      paragraph:
        " Third Eye Educational Center Pvt. Ltd. is more than an education consultancy; we're architects of educational horizons. Our vision extends beyond virtual platforms, embracing the personal touch that only offline interactions can offer. By seamlessly blending offline support with our digital presence, we're pioneering a future where the world's opportunities are within reach. Through Japanese language instruction, strategic guidance, and attentive service, we're shaping a generation of confident global citizens. ",
    },
    {
      heading: 'Pathway to Impact: Nurturing Dreams with Personalized Guidance',
      paragraph:
        " Embark on a journey of transformation with Third Eye Educational Center Pvt. Ltd. Our goals are grounded in the profound impact we make on the lives of our students. Through personalized, face-to-face interactions, we navigate the complexities of education and travel processes. From the tactile experience of Japanese language learning to the hands-on assistance with documentation, we're committed to walking alongside you, turning dreams into achievable milestones. ",
    },
  ];
  return (
    <>
      <HeadingTitle title="services" />
      <div className="flex flex-col justify-center items-center mt-16">
        <SingleService
          image={Service1}
          heading={content[0].heading}
          paragraph={content[0].paragraph}
        />
        <SingleService
          id="opposite"
          image={Service2}
          heading={content[1].heading}
          paragraph={content[1].paragraph}
        />
        <SingleService
          image={Service3}
          heading={content[2].heading}
          paragraph={content[2].paragraph}
        />
      </div>
    </>
  );
};

export default Services;

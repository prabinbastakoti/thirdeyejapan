import HeadingTitle from '../../HeadingTitle';
import Image1 from '../../../assets/a.webp';
import Image2 from '../../../assets/b.webp';
import Image3 from '../../../assets/c.webp';
import Image4 from '../../../assets/d.webp';
import Image5 from '../../../assets/e.webp';
import Image6 from '../../../assets/f.webp';
import SingleContent from './SingleContent';

const SiteContent = () => {
  const content = [
    {
      title: 'We will be guiding you',
      photo: Image1,
      information:
        'Third Eye Educational Centre is your trusted partner on your journey to achieving a successful Japan visa and crafting a fulfilling educational path. We prioritize nurturing your aspirations and those of your family. ',
    },
    {
      title: 'What Sets Us Apart',
      photo: Image2,
      information:
        ' Our distinctiveness lies in our flexibility. Unlike others, we embrace your GAP year, eliminating the need for a compulsory interview. Our Sensei (instructors) are experienced Japan returnees, ensuring top-tier guidance. We go the extra mile by providing hostel facilities and airport pickup services for your convenience. ',
    },
    {
      title: 'Hassle-free Processing',
      photo: Image3,
      information:
        ' Our primary objective is to streamline your visa processing, making it stress-free. We offer free counseling, diverse consultation programs, and essential services. We evaluate, recommend, and guarantee student application placements, allowing you to concentrate on academic goals. ',
    },
    {
      title: 'Fun & Learn',
      photo: Image4,
      information:
        "Learning should be enjoyable! We are dedicated to boosting students' spirits through creative and enjoyable teaching methods. Our classes provide an engaging learning experience while exploring diverse avenues for growth. We ensure numerous opportunities for fun learning alongside academics. ",
    },
    {
      title: 'Extra Curriculum',
      photo: Image5,
      information:
        " We believe in holistic learning beyond textbooks. That's why we offer exciting extra activities to enrich your educational experience. These activities focus on creativity and fun, making learning more engaging. ",
    },
    {
      title: 'Friendly Environment',
      photo: Image6,
      information:
        'We prioritize creating a welcoming and friendly environment for our students. Beyond guiding you through studying abroad in Japan, we aim to create lasting memories. We organize enjoyable outings to ensure your educational journey is enriching and pleasurable. ',
    },
  ];
  return (
    <>
      <div>
        <HeadingTitle title="site content" />
        <div className="grid grid-cols-1 md:grid-cols-3 mt-14 gap-14">
          {content.map((content, index) => {
            return (
              <div key={index}>
                <SingleContent index={index} content={content} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SiteContent;

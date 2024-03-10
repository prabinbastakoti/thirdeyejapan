import HeadingTitle from '../HeadingTitle';
import Instructor1 from '../../assets/instructor1.webp';
import Instructor2 from '../../assets/instructor2.webp';
import { useState } from 'react';

const Instructors = () => {
  const InstructorDetails = [
    {
      id: 1,
      name: 'Roshan Lamichane',
      image: Instructor1,
      details: 'This is detail1',
    },
    {
      id: 2,
      name: 'Sanjog Pudasaini',
      image: Instructor2,
      details: 'This is detail2',
    },
    {
      id: 3,
      name: 'Roshan Lamichane',
      image: Instructor1,
      details: 'This is detail3',
    },
    {
      id: 4,
      name: 'Sanjog Pudasaini',
      image: Instructor2,
      details: 'This is detail4',
    },
  ];

  const initialState = Array(4).fill(false);

  const [isShown, setIsShown] = useState(initialState);

  const handleHover = (status, index) => {
    if (status === 'ON') {
      const copy = [...isShown];
      copy[index] = true;
      setIsShown(copy);
    } else {
      setIsShown(initialState);
    }
  };

  return (
    <>
      <div>
        <HeadingTitle title="Our instructors" />
        <div className="flex flex-col md:flex-row justify-center items-center text-center mt-16 gap-12 px-20">
          {InstructorDetails.map((instructor, index) => {
            return (
              <div
                key={instructor.id}
                className="relative"
                onMouseEnter={() => {
                  handleHover('ON', index);
                }}
                onMouseLeave={() => {
                  handleHover('OFF', index);
                }}
              >
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="shadow-2xl"
                />
                {isShown[index] && (
                  <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-60 text-white flex flex-col justify-center items-center text-base text-center">
                    <div>{instructor.name}</div>
                    <div className="text-sm mt-2">{instructor.details}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Instructors;

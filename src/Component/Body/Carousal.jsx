import { useState } from 'react';
import Image1 from '../../assets/img1.jpg';
import Image2 from '../../assets/img2.jpg';
import Image3 from '../../assets/img3.jpg';
import Image4 from '../../assets/img4.jpg';

import { GrPrevious, GrNext } from 'react-icons/gr';

const Carousal = () => {
  const [active, setActive] = useState(0);

  const photos = [Image1, Image2, Image3, Image4];
  const description = [
    {
      author: 'This is Author A',
      title: 'This is Title A',
      topic: 'This is Topic A',
      description: 'This is Description A',
    },
    {
      author: 'This is Author B',
      title: 'This is Title B',
      topic: 'This is Topic B',
      description: 'This is Description B',
    },
    {
      author: 'This is Author C',
      title: 'This is Title C',
      topic: 'This is Topic C',
      description: 'This is Description C',
    },
    {
      author: 'This is Author D',
      title: 'This is Title D',
      topic: 'This is Topic D',
      description: 'This is Description D',
    },
  ];

  return (
    <>
      <div className="relative h-[100vh] overflow-hidden">
        {photos.map((photo, index) => {
          return (
            <div key={index} className="absolute inset-0">
              <img src={photo} className="w-full object-cover brightness-50" />
              <div className="absolute top-[35%] left-1/4 transform -translate-x-1/2 -translate-y-1/2  flex flex-col gap-4">
                <div className="text-xs text-white tracking-[10px] font-extrabold">
                  {description[index].author}
                </div>
                <div className="text-6xl text-white font-extrabold">
                  {description[index].title}
                </div>
                <div className="text-6xl text-orange-500 font-extrabold">
                  {description[index].topic}
                </div>
                <div className="text-xs text-white">
                  {description[index].description}
                </div>
              </div>
              <div>
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          );
        })}
        <div className="absolute bottom-[30px] left-[40%] overflow-hidden flex flex-row justify-center items-center gap-4">
          {photos.map((photo, index) => {
            return (
              <div className="relative" key={index}>
                <img
                  src={photo}
                  alt=""
                  className="h-[300px] w-[200px] object-cover rounded-2xl brightness-75"
                />
                <div className="absolute text-white bottom-12 w-full text-center">
                  {description[index].title}
                </div>
                <div className="absolute text-white bottom-5 text-center w-full">
                  {description[index].description}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-6 items-center justify-center absolute top-[70%] left-[20%] ">
          <GrPrevious className="text-white bg-[#eee4] w-10 h-10 rounded-full p-3 cursor-pointer hover:bg-white hover:text-black" />
          <GrNext className="text-white bg-[#eee4] w-10 h-10 rounded-full p-3 cursor-pointer hover:bg-white hover:text-black" />
        </div>
      </div>
    </>
  );
};

export default Carousal;

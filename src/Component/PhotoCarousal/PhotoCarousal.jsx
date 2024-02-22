import { useState } from 'react';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';

const PhotoCarousal = ({ photos }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const handleBackArrow = () => {
    if (currentPhoto <= 0) return;
    setCurrentPhoto(currentPhoto - 1);
  };

  const handleFrontArrow = () => {
    if (currentPhoto >= photos.length - 1) return;
    setCurrentPhoto(currentPhoto + 1);
  };

  return (
    <div className="h-[100vh]">
      <div className="bg-rose-500 h-full relative">
        <img
          src={photos[currentPhoto]}
          className="max-h-full w-full object-cover transition-opacity"
        />
        <div className="absolute left-2 top-1/2 bg-gray-800 bg-opacity-50 w-16 h-16 cursor-pointer flex items-center justify-center">
          <MdArrowBackIos
            className="text-white text-6xl"
            onClick={handleBackArrow}
          />
        </div>
        <div className="absolute right-2 top-1/2 bg-gray-800 bg-opacity-50 w-16 h-16 cursor-pointer flex items-center justify-center">
          <MdArrowForwardIos
            className=" text-white text-6xl"
            onClick={handleFrontArrow}
          />
        </div>
        <div>
          <div className="absolute bottom-1 h-[240px] w-full my-auto">
            <swiper-container
              slides-per-view="4"
              space-between="20"
              scrollbar-clickable="true"
              mousewheel-invert="false"
            >
              {photos.map((photo, index) => {
                return (
                  <swiper-slide key={photo} lazy="true">
                    <img
                      src={photo}
                      className={`w-[400px] h-[220px] z-10 ${
                        index !== currentPhoto
                          ? 'brightness-90'
                          : 'brightness-100'
                      } object-cover cursor-pointer`}
                      onClick={() => setCurrentPhoto(index)}
                    />
                  </swiper-slide>
                );
              })}
            </swiper-container>
          </div>
          <div className="absolute bottom-4 h-[240px] bg-slate-800 opacity-50 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousal;

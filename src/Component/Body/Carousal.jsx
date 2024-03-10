import { useState } from 'react';
import Image1 from '../../assets/img1.jpg';
import Image2 from '../../assets/img2.jpg';
import Image3 from '../../assets/img3.jpg';
import Image4 from '../../assets/img4.jpg';

import { GrPrevious, GrNext } from 'react-icons/gr';

const photos = [Image1, Image2, Image3, Image4, Image2];

const Carousal = () => {
  const [photoStorage, setPhotoStorage] = useState(photos);
  const [active, setActive] = useState(0);

  const handleNext = () => {
    if (active === photoStorage.length - 1) {
      setActive(0);
      setPhotoStorage(photos);
    } else {
      const copy = [...photoStorage];
      copy.shift();
      copy.push(photos[active]);
      setActive(active + 1);

      setPhotoStorage(copy);
    }
  };

  const handlePrev = () => {
    if (active === 0) {
      setActive(photoStorage.length - 1);
      const copy = [...photos];
      copy.pop();
      copy.unshift(photos[photos.length - 1]);
      setPhotoStorage(copy);
    } else {
      const copy = [...photoStorage];
      copy.pop();
      copy.unshift(photos[active - 1]);
      setActive(active - 1);

      setPhotoStorage(copy);
    }
  };

  return (
    <div className="container">
      <div className="slide">
        {photoStorage.map((photo, index) => {
          return (
            <div
              key={index}
              className="item"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          );
        })}
      </div>

      <div className="button">
        <button className="prev relative" onClick={handlePrev}>
          <GrPrevious className=" absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </button>
        <button className="next relative" onClick={handleNext}>
          <GrNext className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </button>
      </div>
    </div>
  );
};

export default Carousal;

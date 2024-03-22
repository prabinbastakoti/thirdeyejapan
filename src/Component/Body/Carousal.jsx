import Image1 from '../../assets/img1.jpg';
import Image2 from '../../assets/img2.jpg';
import Image3 from '../../assets/img3.jpg';
import Image4 from '../../assets/img4.jpg';
import Image5 from '../../assets/img5.jpg';
import Image6 from '../../assets/img6.jpg';
import { GrPrevious, GrNext } from 'react-icons/gr';

const array = [Image1, Image2, Image3, Image4, Image5, Image6];

const Carousal = () => {
  const handlePrev = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]); // here the length of items = 6
  };

  const handleNext = () => {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
  };

  return (
    <div className="container">
      <div className="slide">
        {array.map((item) => {
          return (
            <div
              key={item}
              className="item"
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          );
        })}
      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          <GrPrevious />
        </button>
        <button className="next" onClick={handleNext}>
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Carousal;

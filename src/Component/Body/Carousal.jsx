import { GrPrevious, GrNext } from 'react-icons/gr';

const baseUrl = import.meta.env.VITE_ROOT_URL;

const Carousal = ({ data }) => {
  let images = data.contents.filter((item) => item.pageLocation === 'carousal');

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
      <div>
        <div className="slide">
          {images[0].imagePath.map((item) => {
            return (
              <img
                src={`${baseUrl}${item}`}
                alt=""
                className="item"
                key={item}
              />
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
    </div>
  );
};

export default Carousal;

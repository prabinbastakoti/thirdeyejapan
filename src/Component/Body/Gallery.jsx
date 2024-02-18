import Image1 from '../../assets/1.webp';
import Image2 from '../../assets/2.webp';
import Image3 from '../../assets/3.webp';
import Image4 from '../../assets/4.webp';
import Image5 from '../../assets/5.webp';
import Image6 from '../../assets/6.webp';

const Gallery = () => {
  const photos = [Image1, Image2, Image3, Image4, Image5, Image6];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-10">
        {photos.map((photo, index) => {
          return (
            <div className="overflow-hidden" key={index}>
              <img
                src={photo}
                alt={photo}
                className="hover:scale-110 transition duration-500"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;

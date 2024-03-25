const baseUrl = import.meta.env.VITE_ROOT_URL;

const Gallery = ({ data }) => {
  let photos = data.contents.filter((item) => item.pageLocation === 'gallary');

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-10">
        {photos[0].imagePath.map((photo, index) => {
          return (
            <div className="overflow-hidden" key={index}>
              <img
                src={`${baseUrl}${photo}`}
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

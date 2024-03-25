const baseUrl = import.meta.env.VITE_ROOT_URL;

const SingleContent = ({ content }) => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center px-6">
        <div className="text-xl md:text-2xl pb-3 md:pb-5 border-b-2 mb-2 md:mb-5 w-full">
          {content.heading}
        </div>
        <img
          src={`${baseUrl}${content.imagePath[0]}`}
          alt={content.imagePath[0]}
          className="w-full mt-2 md:mt-4"
        />
        <p className="text-base md:text-lg mt-8">{content.shortDescription}</p>
      </div>
    </>
  );
};

export default SingleContent;

const SingleContent = ({ content }) => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center px-6">
        <div className="text-xl md:text-2xl pb-3 md:pb-5 border-b-2 mb-2 md:mb-5 w-full">
          {content.title}
        </div>
        <img
          src={content.photo}
          alt={content.photo}
          className="w-full mt-2 md:mt-4"
        />
        <p className="text-base md:text-lg mt-8">{content.information}</p>
      </div>
    </>
  );
};

export default SingleContent;

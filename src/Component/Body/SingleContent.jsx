const SingleContent = ({ content }) => {
  return (
    <>
      <div className="text-center flex flex-col justify-center items-center px-6">
        <div className="text-2xl pb-5 border-b-2 mb-5 w-full">
          {content.title}
        </div>
        <img src={content.photo} alt={content.photo} className="w-full mt-4" />
        <p className="text-lg mt-8">{content.information}</p>
      </div>
    </>
  );
};

export default SingleContent;

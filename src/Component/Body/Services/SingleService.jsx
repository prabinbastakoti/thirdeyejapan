const SingleService = ({ id, image, heading, paragraph }) => {
  return (
    <>
      <div
        className={`flex flex-col ${
          id === 'opposite' ? 'md:flex-row-reverse' : 'md:flex-row'
        } justify-between items-center mb-16 gap-16`}
      >
        <img
          src={image}
          alt="Service1"
          className="shadow-lg md:w-[650px] md:h-[400px] object-cover w-11/12"
        />
        <div className=" flex-1 px-10">
          <h1 className="text-center border-b text-2xl pb-5">{heading}</h1>
          <p className="mt-5 text-center text-lg text-[#5e5e63]">{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default SingleService;
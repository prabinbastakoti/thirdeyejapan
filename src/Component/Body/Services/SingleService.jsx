const SingleService = ({ id, image, heading, paragraph }) => {
  return (
    <>
      <div
        className={`flex ${
          id === 'opposite' ? 'flex-row-reverse' : 'flex-row'
        } justify-between items-center mb-16 gap-16`}
      >
        <img
          src={image}
          alt="Service1"
          className="shadow-lg w-[650px] h-[400px] object-cover"
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

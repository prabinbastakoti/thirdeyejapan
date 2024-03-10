const HeadingTitle = ({ title }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <h1 className="bg-[#15104d] text-white tracking-widest text-lg md:text-2xl px-6 py-2 md:px-10 md:py-2 mt-20 uppercase">
          {title}
        </h1>
      </div>
    </>
  );
};

export default HeadingTitle;

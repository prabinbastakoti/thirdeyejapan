const HeadingTitle = ({ title }) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <h1 className="bg-black text-white tracking-widest text-xl md:text-2xl px-10 py-2 mt-20 uppercase">
          {title}
        </h1>
      </div>
    </>
  );
};

export default HeadingTitle;

const baseUrl = import.meta.env.VITE_ROOT_URL;

const AboutUs = ({ data }) => {
  let aboutUs = data.contents.filter((item) => item.pageLocation === 'about');

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 bg-[#15104d] py-14 md:py-0 gap-10 md:gap-0">
        <img
          src={`${baseUrl}${aboutUs[0].imagePath[0]}`}
          alt="About"
          className="w-[80%] md:p-14 md:w-1/2 object-contain"
        />
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-wide text-white">
            {aboutUs[0].heading}
          </h1>
          <p className="text-base md:text-xl px-8 text-center text-white">
            {aboutUs[0].shortDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

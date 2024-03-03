import About from '../../assets/about.jpg';

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mt-20 bg-[#15104d]">
        <img src={About} alt="About" className="p-14 w-1/2 object-contain" />
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <h1 className="text-3xl font-semibold tracking-wide text-white">
            ABOUT THIRDEYE
          </h1>
          <p className="text-xl px-8 text-center text-white">
            We will be here for you every step of the way. Our education
            consultants will work with you and your family to plan the next step
            on your educational journey.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

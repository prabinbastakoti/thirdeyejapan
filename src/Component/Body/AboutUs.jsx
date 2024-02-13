import About from '../../assets/about.webp';

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-row justify-center items-center mt-20 gap-24">
        <img src={About} alt="About" className="w-2/5 object-contain" />
        <div className="w-1/2 flex flex-col justify-center items-center gap-6">
          <h1 className="text-4xl font-semibold tracking-wide">
            ABOUT THIRDEYE
          </h1>
          <p className="text-2xl px-4 text-center text-[#5e7386]">
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

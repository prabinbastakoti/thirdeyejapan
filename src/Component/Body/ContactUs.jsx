import HeadingTitle from '../HeadingTitle';

const ContactUs = () => {
  return (
    <>
      <div>
        <HeadingTitle title="contact us" />
        <div className="pb-10">
          <h1 className="text-2xl text-center mt-12 pb-5 border-b">
            Better yet, see us in person!
          </h1>
          <p className="text-lg text-center text-[#5e5e5e] mt-6 mb-6">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
          <h1 className="text-2xl text-center mt-12 pb-5 border-b">
            Third Eye Japan
          </h1>
          <div className=" pb-5 border-b">
            <h1 className="text-2xl text-center mt-10 mb-5">Hours</h1>
            <p className="text-lg text-center text-[#5e5e5e]">
              This part is remaining
            </p>
          </div>
          <div className="flex flex-row justify-center mt-10 pb-10 border-b">
            <button className="bg-[#d8d0c5] px-12 py-6 text-xl font-medium tracking-widest border-b-8 border-[#b1a99e]">
              DROP US A LINE!
            </button>
          </div>
          <div className="text-lg mt-6 mb-10">
            Copyright © 2024 Third Eye Japan - All Rights Reserved.
          </div>
          <div className="text-center text-lg w-full">
            <div className="mx-auto border-b-2 border-[#dad2c7] w-fit">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;

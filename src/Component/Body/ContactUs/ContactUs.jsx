import { useState } from 'react';
import HeadingTitle from '../../HeadingTitle';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const ContactUs = () => {
  const [openAll, setOpenAll] = useState(false);
  const time = [
    { day: 'Sun', duration: 'Closed' },
    { day: 'Mon', duration: '09:00 - 17:00' },
    { day: 'Tue', duration: '09:00 - 17:00' },
    { day: 'Wed', duration: '09:00 - 17:00' },
    { day: 'Thur', duration: '09:00 - 17:00' },
    { day: 'Fri', duration: '09:00 - 17:00' },
    { day: 'Sat', duration: 'Closed' },
  ];
  const today = new Date().getDay();

  const showAllTimings = () => {
    setOpenAll(!openAll);
  };

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
            <div className="flex flex-row justify-center items-center text-lg text-[#5e5e5e] gap-4">
              {!openAll ? (
                <>
                  {today == 0 || today == 6 ? <p>Today</p> : <p>Open today</p>}
                  <p className="border-b-2 border-[#dad2c7]">
                    {time[today].duration}
                  </p>
                  <FaCaretDown
                    className="cursor-pointer"
                    onClick={showAllTimings}
                  />
                </>
              ) : (
                <div className="flex flex-row gap-10">
                  <div>
                    {time.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            index === today ? 'font-semibold' : 'font-normals'
                          }`}
                        >
                          <p>{item.day}</p>
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {time.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`${
                            index === today ? 'font-semibold' : 'font-normals'
                          }`}
                        >
                          <p>{item.duration}</p>
                        </div>
                      );
                    })}
                  </div>
                  <FaCaretUp
                    className="cursor-pointer"
                    onClick={showAllTimings}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-center mt-10 pb-10 border-b">
            <button className="bg-[#d8d0c5] px-12 py-6 text-xl font-medium tracking-widest border-b-8 border-[#b1a99e]">
              DROP US A LINE!
            </button>
          </div>
          <div className="text-lg mt-6 mb-10 text-center md:text-left">
            Copyright © 2024 Third Eye Japan - All Rights Reserved.
          </div>
          <div className="text-center text-lg w-full">
            <div className="mx-auto border-b-2 border-[#dad2c7] w-fit">
              Privacy Policy
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT US FORM */}

      <div>
        <h1>Drop us a line!</h1>
      </div>
    </>
  );
};

export default ContactUs;

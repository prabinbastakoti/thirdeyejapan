import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';

import Social1 from '../../assets/sm1.png';
import Social2 from '../../assets/sm2.png';
import Social3 from '../../assets/sm3.png';
import { useState } from 'react';

const Navbar = ({ tab = 'HOME' }) => {
  const navItems = ['HOME', 'CONTACT US', 'BLOG', 'PORTFOLIO'];

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="w-full px-4 py-3 md:py-4 flex justify-between items-center relative z-10 bg-[#15104d] bg-opacity-50">
        <div className="text-base md:text-xl text-white font-extrabold tracking-wider pl-2 md:pl-5">
          THIRDEYEJAPAN
        </div>
        <div className="md:flex-1 hidden md:inline">
          <ul className="flex flex-row justify-center items-center gap-16">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={` text-white text-lg tracking-wider cursor-pointer py-1 hover:text-[#bfbebc] ${
                    tab === item ? 'border-b-2 border-[#dad2c7]' : 'border-none'
                  }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:flex flex-row justify-end items-center gap-6 pr-14">
          <div className="hidden md:flex flex-row justify-between items-center gap-5">
            <a href="https://www.facebook.com/TEECPL" target="_blank">
              <img src={Social1} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/thirdeyeeducationalcenter/"
              target="_blank"
            >
              <img src={Social2} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@thirdeyeeducationalcenterp747"
              target="_blank"
            >
              <img src={Social3} alt="Youtube" className="w-5 h-5" />
            </a>
          </div>
          <div className="text-[#dad2c7]">|</div>
          <div className="hidden md:flex flex-row justify-between items-center gap-5">
            <FaCartShopping className="w-5 h-5 cursor-pointer text-white" />
            <FaUser className="w-5 h-5 cursor-pointer text-white" />
          </div>
        </div>
        <GiHamburgerMenu
          className="text-white text-lg cursor-pointer md:hidden z-10"
          onClick={handleOpen}
        />
        <div
          className={`md:hidden absolute top-0 transition-all ${
            open ? 'right-0' : '-right-[50%]'
          } w-1/2 h-[100vh] bg-black flex flex-col justify-center
        items-center gap-6`}
        >
          {navItems.map((item, index) => {
            return (
              <div key={index} className="text-white">
                {item}
              </div>
            );
          })}
          <div className="flex flex-row justify-center items-center gap-6">
            <a href="https://www.facebook.com/TEECPL" target="_blank">
              <img src={Social1} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/thirdeyeeducationalcenter/"
              target="_blank"
            >
              <img src={Social2} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@thirdeyeeducationalcenterp747"
              target="_blank"
            >
              <img src={Social3} alt="Youtube" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

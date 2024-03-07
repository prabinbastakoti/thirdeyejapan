import { FaUser } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import Social1 from '../../assets/sm1.png';
import Social2 from '../../assets/sm2.png';
import Social3 from '../../assets/sm3.png';

const Navbar = ({ tab = 'HOME' }) => {
  const navItems = ['HOME', 'CONTACT US', 'BLOG', 'PORTFOLIO'];
  return (
    <>
      <div className="w-[100%] hidden py-4 md:flex justify-between items-center relative z-10 bg-[#15104d] bg-opacity-25">
        <div className="text-xl text-white font-extrabold tracking-wider pl-5">
          THIRDEYEJAPAN
        </div>
        <div className="flex-1 ">
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
        <div className="flex flex-row justify-end items-center gap-6 pr-14">
          <div className="flex flex-row justify-between items-center gap-5">
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
          <div className="flex flex-row justify-between items-center gap-5">
            <FaCartShopping className="w-5 h-5 cursor-pointer text-white" />
            <FaUser className="w-5 h-5 cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

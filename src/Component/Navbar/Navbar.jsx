import Logo from '../../assets/images.png';
import { FaInstagram, FaYoutube, FaUser, FaFacebook } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

const Navbar = ({ tab = 'HOME' }) => {
  const navItems = ['HOME', 'CONTACT US', 'BLOG', 'PORTFOLIO'];
  return (
    <>
      <div className="pl-4 grid grid-cols-3 justify-between items-center">
        <div className="w-fit">
          <a href="">
            <img
              src={Logo}
              alt="ThirdEyeJapan"
              className="h-[120px] w-[120px]"
            />
          </a>
        </div>
        <div className="">
          <ul className="flex flex-row justify-between items-center">
            {navItems.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`text-[#1b1b1b] text-lg tracking-wider cursor-pointer py-1 hover:text-[#4A4641] ${
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
              <FaFacebook className="text-[#1877f2] w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/thirdeyeeducationalcenter/"
              target="_blank"
            >
              <FaInstagram className="text-[#e1306c] w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@thirdeyeeducationalcenterp747"
              target="_blank"
            >
              <FaYoutube className="text-[#ff0000] w-5 h-5" />
            </a>
          </div>
          <div className="text-[#dad2c7]">|</div>
          <div className="flex flex-row justify-between items-center gap-5">
            <FaCartShopping className="w-5 h-5 cursor-pointer" />
            <FaUser className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import HeadingTitle from '../HeadingTitle';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

const Social = () => {
  return (
    <>
      <div>
        <HeadingTitle title="social" />
        <div className="flex flex-row justify-center items-center mt-14 gap-16">
          <a href="https://www.facebook.com/TEECPL" target="_blank">
            <FaFacebook className="text-[#1877f2] w-12 h-12" />
          </a>
          <a
            href="https://www.instagram.com/thirdeyeeducationalcenter/"
            target="_blank"
          >
            <FaInstagram className="text-[#e1306c] w-12 h-12" />
          </a>
          <a
            href="https://www.youtube.com/@thirdeyeeducationalcenterp747"
            target="_blank"
          >
            <FaYoutube className="text-[#ff0000] w-12 h-12" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;

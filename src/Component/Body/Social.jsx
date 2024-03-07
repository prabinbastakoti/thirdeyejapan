import HeadingTitle from '../HeadingTitle';
import HeaderImage from '../../assets/header.jpg';
import Social1 from '../../assets/sm1.png';
import Social2 from '../../assets/sm2.png';
import Social3 from '../../assets/sm3.png';

const Social = () => {
  return (
    <>
      <div>
        <HeadingTitle title="social" />
        <div
          className="flex flex-row justify-center items-center mt-14 gap-16 py-20"
          style={{
            backgroundImage: `url(${HeaderImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <a href="https://www.facebook.com/TEECPL" target="_blank">
            <img
              src={Social1}
              alt="Facebook"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://www.instagram.com/thirdeyeeducationalcenter/"
            target="_blank"
          >
            <img
              src={Social2}
              alt="Instagram"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>
          <a
            href="https://www.youtube.com/@thirdeyeeducationalcenterp747"
            target="_blank"
          >
            <img
              src={Social3}
              alt="Youtube"
              className="w-8 h-8 md:w-12 md:h-12"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;

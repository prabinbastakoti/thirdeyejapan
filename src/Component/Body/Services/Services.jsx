import SingleService from './SingleService';
import HeadingTitle from '../../HeadingTitle';

const Services = ({ data }) => {
  let services = data.contents.filter(
    (item) => item.pageLocation === 'services'
  );

  return (
    <>
      <HeadingTitle title="services" />
      <div className="flex flex-col justify-center items-center mt-16 gap-8 md:gap-0">
        {services.map((item, index) => {
          return (
            <SingleService
              key={index}
              id={`${index == 1 ? 'opposite' : ''}`}
              image={item.imagePath[0]}
              heading={item.heading}
              paragraph={item.shortDescription}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;

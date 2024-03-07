import HeadingTitle from '../HeadingTitle';
import Instructor1 from '../../assets/instructor1.webp';
import Instructor2 from '../../assets/instructor2.webp';

const Instructors = () => {
  return (
    <>
      <div>
        <HeadingTitle title="Our instructors" />
        <div className="flex flex-row justify-center items-center text-center mt-16 gap-12 px-20">
          <div>
            <h1 className=" text-xl md:text-2xl pb-5 border-b-2 mb-10">
              Roshan Lamichane
            </h1>
            <img
              src={Instructor1}
              alt="Roshan Lamichane"
              className="shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl pb-5 border-b-2 mb-10">
              Sanjog Pudasaini
            </h1>
            <img
              src={Instructor2}
              alt="Sanjog Pudasaini"
              className="shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl pb-5 border-b-2 mb-10">
              Sanjog Pudasaini
            </h1>
            <img
              src={Instructor1}
              alt="Sanjog Pudasaini"
              className="shadow-2xl"
            />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl pb-5 border-b-2 mb-10">
              Sanjog Pudasaini
            </h1>
            <img
              src={Instructor2}
              alt="Sanjog Pudasaini"
              className="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Instructors;

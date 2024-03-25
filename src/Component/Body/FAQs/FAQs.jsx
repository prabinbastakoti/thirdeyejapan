import HeadingTitle from '../../HeadingTitle';
import Question from './Question';

const FAQs = ({ data }) => {
  let FAQs = data.contents.filter((item) => item.pageLocation === 'FAQ');

  return (
    <>
      <div>
        <HeadingTitle title="frequently asked questions" />
        <p className="flex flex-row justify-center items-center text-[#5e5e5e] text-sm md:text-base pt-6 mb-16">
          Please contact us if you cannot find an answer to your question.
        </p>
        <div className="flex flex-col justify-center items-center gap-16">
          {FAQs.map((item, index) => {
            return <Question key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FAQs;

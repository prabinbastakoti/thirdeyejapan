import HeadingTitle from '../../HeadingTitle';
import Question from './Question';

const FAQs = () => {
  const content = [
    {
      question:
        'How does Third Eye make applying for a student visa for Japan easy?',
      answer:
        'At Third Eye, we aim to ensure a smooth and stress-free experience for your visa processing. In addition, our range of services is designed to simplify the entire process for you. We offer a variety of convenient facilities to assist you with your visa procedures and make them hassle-free',
    },
    {
      question:
        "What does Third Eye educational consultant do to ensure students' acceptance in their first-choice school?",
      answer:
        ' Third Eye has various consultation programs or services that help students, choose the right institution, create strong applications, and navigate standardized tests. We assess your academic history and collaboratively set attainable goals to secure your admission.',
    },
    {
      question: 'When / How can I meet Third Eye for counseling?',
      answer:
        'No one can ethically offer this guarantee. However, we can work with your child to shape their activities and application to give them their very best chance.',
    },
    {
      question:
        'Are the language instructors at Third Eye Education experienced?',
      answer:
        'Yes, they are. All the instructors at Third Eye Education have returned from Japan, they have significant experience teaching the Japanese language. We also have a Japanese guest lecturer who comes for a constant visit.  Rest assured that they are highly knowledgeable and skilled in their field.',
    },
    {
      question: 'What differentiates Third Eye from other consultancy?',
      answer:
        'Our services and requirements set us apart from other consultancies. The document requirements for visa processing are minimal. Additionally, we offer services such as airport pickup, hostel accommodation, and extra activities like picnics, which further distinguish us.',
    },
  ];
  return (
    <>
      <div>
        <HeadingTitle title="frequently asked questions" />
        <p className="flex flex-row justify-center items-center text-[#5e5e5e] text-lg pt-6 mb-16">
          Please contact us if you cannot find an answer to your question.
        </p>
        <div className="flex flex-col justify-center items-center gap-16">
          <Question data={content[0]} />
          <Question data={content[1]} />
          <Question data={content[2]} />
          <Question data={content[3]} />
          <Question data={content[4]} />
        </div>
      </div>
    </>
  );
};

export default FAQs;

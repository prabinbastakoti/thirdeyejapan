import { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Question = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center text-base md:text-2xl text-[#1b1b1b] w-4/5 md:w-2/3 mx-auto ">
        <div
          className="flex flex-row justify-between w-full cursor-pointer gap-4"
          onClick={handleOpen}
        >
          <h1 className="text-base md:text-xl">{data.question}</h1>
          <div>{open ? <FaCaretUp /> : <FaCaretDown />}</div>
        </div>
        {open && (
          <p className="text-[#5e5e5e] text-sm md:text-base border-b pt-4 pb-10 pr-14">
            {data.answer}
          </p>
        )}
      </div>
    </>
  );
};

export default Question;

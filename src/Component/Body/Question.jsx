import { useState } from 'react';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';

const Question = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex flex-col justify-between items-center text-2xl text-[#1b1b1b] w-2/3 mx-auto ">
        <div
          className="flex flex-row justify-between items-center w-full cursor-pointer"
          onClick={handleOpen}
        >
          <h1>{data.question}</h1>
          {open ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        {open && (
          <p className="text-[#5e5e5e] text-lg border-b pt-4 pb-10 pr-14">
            {data.answer}
          </p>
        )}
      </div>
    </>
  );
};

export default Question;

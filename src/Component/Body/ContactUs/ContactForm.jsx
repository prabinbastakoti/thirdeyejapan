import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUsForm = ({ setModal }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();
    setModal(false);
    toast.success(
      'Thanks for being awesome! We will get back in touch with you soon!',
      {
        position: 'top-right',
        toastId: 'success',
      }
    );
  };

  return (
    <div className="w-full mt-14 mb-24">
      <form className="w-4/5 mx-auto" onSubmit={submitForm}>
        <h1 className="text-center text-2xl mb-6">Drop us a line!</h1>
        <div className="md:w-3/5 mx-auto flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-base text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor="name"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-base text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>

          <textarea
            id="message"
            placeholder="Message"
            className="px-2.5 placeholder-gray-500 border-b-2 border-gray-300 bg-gray-50 text-gray-900 text-base pt-5 pb-2.5 focus:outline-none focus:ring-0 focus:border-blue-600"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <p className="text-[#59597d] text-sm text-center mt-6">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>

          <div className="flex flex-row justify-center items-center gap-8">
            <button
              type="submit"
              className="bg-[#15104d] px-6 py-2 font-medium tracking-widest border-b-8 border-[#0f0c31] text-white text-base md:text-lg"
              onClick={submitForm}
            >
              SEND
            </button>
            <button
              type="button"
              onClick={() => setModal(false)}
              className="border-b-2 border-[#dad2c7] text-base md:text-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;

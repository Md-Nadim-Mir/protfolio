import { MdPerson } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { Form } from "react-router-dom";
import Heading from "./Heading";
import { Helmet } from "react-helmet";
import { RiSendPlaneFill } from "react-icons/ri";
const Contract = () => {
  const handleSubmit = (e) => {
    e.target.preventDefault();
    console.log("hello");
  };

  return (
    <div className="pt-12 bg-[#5E4D3E] md:px-12 lg:px-24 py-16">
      <Helmet>
        <title>Nadim Protfolio | Contact </title>
      </Helmet>
      <Heading title="Contact Me"></Heading>

      <div className="grid gird-cols-1 md:grid-cols-2 gap-5 px-2 md:px-0 py-5 md:py-14  ">
        <div className="md:px-4 px-4   py-5 shadow-2xl rounded-md">
          <h1 className="font-extrabold text-xl md:text-2xl text-black py-5">
            Get in Touch
          </h1>

          <p className="text-white font-semibold text-justify">
            I am a hard-working, reliable web developer. I love being in this
            line of work because I am passionate about technology, design, and
            innovation.
          </p>

          <div className="py-10 space-y-2">
            <div className="flex gap-x-5 items-center">
              <div>
                <MdPerson className="text-3xl text-[#FF4500] animate-bounce"></MdPerson>
              </div>

              <div>
                <h1 className="font-extrabold  text-black">Name</h1>
                <h1 className="font-semibold  text-white">Md. Nadim Mir</h1>
              </div>
            </div>

            <div className="flex gap-x-5 items-center">
              <div>
                <ImLocation2 className="text-3xl text-[#FF4500] animate-bounce"></ImLocation2>
              </div>

              <div>
                <h1 className="font-extrabold  text-black">Address</h1>
                <h1 className="font-semibold  text-white">
                  Khulna , Bangladesh
                </h1>
              </div>
            </div>

            <div className="flex gap-x-5 items-center">
              <div>
                <FaPhone className="text-3xl text-[#FF4500] animate-bounce"></FaPhone>
              </div>

              <div>
                <h1 className="font-extrabold  text-black">Connected</h1>
                <h1 className="font-semibold  text-white">
                  01779-198286 , 01315-478147
                </h1>
              </div>
            </div>

            <div className="flex gap-x-5 items-center ">
              <div>
                <MdEmail className="text-3xl text-[#FF4500] animate-bounce"></MdEmail>
              </div>

              <div>
                <h1 className="font-extrabold  text-black">Email</h1>
                <h1 className="font-semibold  text-white">
                  mdnadimmir150@gmail.com
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="md:px-4 px-4  py-5 shadow-2xl rounded-md">
          <h1 className="font-extrabold text-2xl text-black py-5">
            Message Me
          </h1>

          <Form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
              <input
                type="text"
                placeholder="name"
                className="p-2 rounded-md text-black font-bold w-full"
              />
              <input
                type="email"
                placeholder="email"
                className="p-2 rounded-md text-black font-bold w-full"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject "
                className="p-2 rounded-md text-black font-bold w-full"
              />
            </div>

            <div>
              <textarea
                className="p-2 rounded-md text-black font-bold w-full textarea textarea-bordered h-[120px]"
                placeholder="Message info ....."
              ></textarea>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                type="submit"
                className="btn border-b-2 bg-[#4D4944] hover:bg-[#4D4944] text-white font-bold text-base my-5"
              >
                Send Message
                <RiSendPlaneFill className="text-2xl text-[#FF4500] rounded-md animate-bounce"></RiSendPlaneFill>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contract;

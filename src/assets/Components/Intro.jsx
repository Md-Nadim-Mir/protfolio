import { Link } from "react-router-dom";

import image_home from "../../../public/home.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Intro = () => {
  return (
    // bg-[#4D4944]
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:px-12 lg:px-36 xl:px-72  gap-5 pt-4 md:pt-0 px-2 bg-[#4D4944] py-20">
      <div className="text-black px-5 md:px-0">
        <Helmet>
          <title>Nadim Protfolio | Home </title>
        </Helmet>
        <h1 className="text-2xl md:text-4xl font-bold">Front-End React</h1>
        <h1 className="text-2xl md:text-4xl font-bold">
          Developer <span className="animate-ping">👋</span>
        </h1>

        <h2 className="text-[white] font-semibold pt-3 text-justify">
          Hi , I am Md. Nadim Mir. A passionate Front-end React Developer from
          Khulna , Bangladesh.
        </h2>
        <div className="flex py-5 gap-x-3 ">
          <Link
            className="animate-bounce hover:animate-none"
            to="https://www.linkedin.com/in/md-nadim-mir-6665252a4/"
          >
            <FaLinkedin className="text-2xl bg-[#0077B5] text-white rounded-md"></FaLinkedin>
          </Link>

          <Link
            className="animate-bounce hover:animate-none"
            to="https://www.facebook.com/mdnadim.mir.96"
          >
            <FaFacebook className="text-2xl text-[#0035BB] bg-[white] rounded-md"></FaFacebook>
          </Link>
        </div>
      </div>

      <div className="">
        <img className="rounded-md" src={image_home} alt="" />
      </div>
    </div>
  );
};

export default Intro;

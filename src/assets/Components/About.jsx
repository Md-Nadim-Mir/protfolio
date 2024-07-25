import image from "../../../public/final_about.png";
import cv from "../../../public/Resume-of-Md-Nadim-Mir.pdf";

import Heading from "./Heading";
import { FaDownload } from "react-icons/fa6";
import ReactToPdf from "react-to-print";
// import { useRef } from "react";

const About = () => {
  // let ref = useRef();
  return (
    <div className="pt-12 bg-[#5E4D3E] md:px-12 lg:px-24 py-16">
      <Heading title="About Me"></Heading>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-2 pt-12 items-center">
        <div className="flex justify-center md:justify-start px-2 md:px-0">
          <img className="rounded-box " src={image} alt="" />
        </div>

        <div className="px-5 pt-4 md:pt-0 md:px-0">
          <p className="text-white font-semibold text-justify">
            Detail-oriented Front-End Developer with expertise in React.js,
            JavaScript, Node.js, Express.js, and MongoDB. My passion lies in
            crafting pixel-perfect user interfaces that seamlessly blend
            creativity with functionality. From concept to deployment, I thrive
            on turning ideas into immersive digital experiences. Let's build the
            future together!
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href={cv}
              download={"Resume-of-Md-Nadim-Mir.pdf"}
              className="btn border-b-2 bg-[#4D4944] hover:bg-[#4D4944] text-white font-bold text-base my-5"
            >
              <FaDownload className="text-2xl text-[#FF4500] rounded-md animate-bounce"></FaDownload>{" "}
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { FaGitAlt, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className="pt-12 bg-[#5E4D3E] md:px-12 lg:px-24 py-16">
      <Helmet>
        <title>Nadim Protfolio | Skills </title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl text-center font-extrabold text-black">
        My Skills
      </h1>

      <div className="grid gird-cols-1 md:grid-cols-2 gap-5  md:px-0 py-8 md:py-12 items-center xl:px-4 px-4">
        <div className="">
          <h1 className="font-extrabold text-xl md:text-2xl text-black py-5">
            My creative skills & experiences
          </h1>

          <p className="text-white font-semibold text-justify">
            Experienced web developer specializing in front-end technologies,
            including HTML, CSS, Tailwind CSS, and React.js. Proficient in
            Firebase and DasiUI for dynamic and visually appealing applications.
            Comfortable with Node.js, Express.js, and MongoDB for seamless
            full-stack development. Strong version control skills using Git.
            Passionate about pushing the boundaries of web development to create
            cutting-edge solutions.
          </p>
          <p className="text-white font-semibold  py-2 text-justify">
            Transitioning from an Full stack developer, i will be learning
            TypeScript for enhanced code quality, Mongoose for streamlined
            MongoDB interactions, and Next.js for optimized React applications
            adds depth to your skill set. Embracing Redux enables better state
            management, while Prisma simplifies database access, fostering a
            more sophisticated and competitive approach to web development.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to="https://github.com/Md-Nadim-Mir"
              className="btn border-b-2 bg-[#4D4944] hover:bg-[#4D4944] text-white font-bold text-base my-5"
            >
              <FaGithub className="text-2xl text-[#FF4500] rounded-md animate-bounce"></FaGithub>
              Github
            </Link>
          </div>
        </div>
        <div className=" font-bold ">
          <div>
            {/* html */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[orange]">HTML</h1>
              <FaHtml5 className="text-[#FF4500] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[#50f733] animate-bounce">94%</h1>
            </div>
            <progress
              className="progress bg-white progress-error w-full"
              value={94}
              max="100"
            ></progress>
          </div>

          <div>
            {/* css */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[#ff3a3a]">Tailwind CSS</h1>
              <SiTailwindcss className="text-[#3cdff4] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[navy] animate-bounce">92%</h1>
            </div>
            <progress
              className="progress bg-white progress-secondary w-full"
              value={92}
              max="100"
            ></progress>
          </div>

          <div>
            {/* javaScirpt */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[yellowgreen]">JavaScript</h1>
              <TbBrandJavascript className="text-[yellow] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[#30deb0] animate-bounce">78%</h1>
            </div>
            <progress
              className="progress bg-white progress-success w-full"
              value={78}
              max="100"
            ></progress>
          </div>

          <div>
            {/* React */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[#ff35d7]">React</h1>
              <FaReact className="text-[red] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[#308af8] animate-bounce">84%</h1>
            </div>
            <progress
              className="progress bg-white progress-primary w-full"
              value={84}
              max="100"
            ></progress>
          </div>

          <div>
            {/* React */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[#35ff5a]">Node.js</h1>
              <FaNode className="text-[#c73cfe] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[#30f1f8] animate-bounce">44%</h1>
            </div>
            <progress
              className="progress bg-white progress-warning w-full"
              value={44}
              max="100"
            ></progress>
          </div>

          <div>
            {/* express */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[#ff3a3a]">Express</h1>
              <SiExpress className="text-[#2ffccc] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[navy] animate-bounce">72%</h1>
            </div>
            <progress
              className="progress bg-white progress-error w-full"
              value={72}
              max="100"
            ></progress>
          </div>

          <div>
            {/*mongodb */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[orange]">MongoDB</h1>
              <SiMongodb className="text-[#31eb3a] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[hotpink] animate-bounce">67%</h1>
            </div>
            <progress
              className="progress bg-white progress-accent w-full"
              value={67}
              max="100"
            ></progress>
          </div>

          <div>
            {/* firebase */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[#ff35d7]">Firebase</h1>
              <IoLogoFirebase className="text-[#fed73c] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[#308af8] animate-bounce">87%</h1>
            </div>
            <progress
              className="progress bg-white progress-primary w-full"
              value={87}
              max="100"
            ></progress>
          </div>

          <div>
            {/* git */}
            <div className="grid grid-cols-3 justify-center items-center">
              <h1 className="text-[yellowgreen]">Git</h1>
              <FaGitAlt className="text-[black] text-4xl animate-spin hover:animate-none" />
              <h1 className="text-[#30deb0] animate-bounce ">48%</h1>
            </div>
            <progress
              className="progress bg-white progress-success w-full"
              value={48}
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

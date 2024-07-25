import bsc from "../../../public/bsc.gif";
import hsc from "../../../public/hsc.gif";
import ssc from "../../../public/ssc.gif";
import jsc from "../../../public/jsc.gif";
import psc from "../../../public/psc.gif";

import { FaUniversity } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FcAlarmClock } from "react-icons/fc";
import Heading from "./Heading";

const Educational_Info = () => {
  return (
    <div className="bg-[#4D4944] md:px-12 lg:px-32 xl:px-24 py-12">
      <Heading title={"Educational Info"}></Heading>

      <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:px-1 px-4  text-black">
        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full" src={bsc} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#4D4944]">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <FaUniversity className="text-5xl font-bold "></FaUniversity>
              <h1>Imperial College of Engineerring , Khulna</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FaBookOpen className="text-3xl font-bold "></FaBookOpen>
              <h1>Computer Science & Engineering</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FcAlarmClock className="text-3xl font-bold "></FcAlarmClock>
              <h1>2019-Till</h1>
            </div>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img src={hsc} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#4D4944]">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <FaUniversity className="text-5xl font-bold "></FaUniversity>
              <h1>Tejdashkhati College , Pirojpur</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FaBookOpen className="text-3xl font-bold "></FaBookOpen>
              <h1>Science</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FcAlarmClock className="text-3xl font-bold "></FcAlarmClock>
              <h1>2016-2018</h1>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img src={ssc} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#4D4944]">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <FaUniversity className="text-5xl font-bold "></FaUniversity>
              <h1>Durgapur High School , Pirojpur</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FaBookOpen className="text-3xl font-bold "></FaBookOpen>
              <h1>Science</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FcAlarmClock className="text-3xl font-bold "></FcAlarmClock>
              <h1>2014-2016</h1>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full" src={jsc} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#4D4944]">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <FaUniversity className="text-5xl font-bold "></FaUniversity>
              <h1>Durgapur High School , Pirojpur</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FaBookOpen className="text-3xl font-bold "></FaBookOpen>
              <h1>Basic</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FcAlarmClock className="text-3xl font-bold "></FcAlarmClock>
              <h1>2013</h1>
            </div>
          </div>
        </div>

        {/* <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img src={psc} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#4D4944]">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <FaUniversity className="text-5xl font-bold "></FaUniversity>
              <h1>Durgapur Govt. Primary School , Pirojpur</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FaBookOpen className="text-3xl font-bold "></FaBookOpen>
              <h1>Basic</h1>
            </div>

            <div className=" font-bold flex items-center gap-x-4">
              <FcAlarmClock className="text-3xl font-bold "></FcAlarmClock>
              <h1>2010</h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Educational_Info;

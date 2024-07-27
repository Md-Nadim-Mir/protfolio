import React from "react";
import { GiDividedSquare } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import food from "../../../public/projects_image/food.png";
import health from "../../../public/projects_image/health.png";
import event from "../../../public/projects_image/event.png";
import job from "../../../public/projects_image/job.png";
import { Helmet } from "react-helmet";

const Projects = () => {
  return (
    <div className="bg-[#4D4944] md:px-12 lg:px-32 xl:px-24 py-12">
      <Helmet>
        <title>Nadim Protfolio | Projects </title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl text-center font-extrabold text-black">
        Projects List
      </h1>

      <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 px-4 md:px-2 text-black">
        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full h-[180px]" src={job} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#5E4D3E] text-white">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <GiDividedSquare className="text-xl font-bold text-[pink]" />
              <h1>Search Job</h1>
            </div>

            <Link
              to="https://serching-jobs.web.app/"
              className=" font-bold flex items-center gap-x-2"
            >
              <TbWorld className="text-xl font-bold text-[#b1fb43] "></TbWorld>
              <h1>Live Link</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Searching-Job"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Client Site</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Searching-Job"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Server Site</h1>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full h-[180px]" src={health} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#5E4D3E] text-white">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <GiDividedSquare className="text-xl font-bold text-[pink]" />
              <h1>Heart Healt Center</h1>
            </div>

            <Link
              to="https://heart-health-center.web.app/"
              className=" font-bold flex items-center gap-x-2"
            >
              <TbWorld className="text-xl font-bold text-[#b1fb43]"></TbWorld>
              <h1>Live Link</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Heart-Health-Center"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Client Site</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Heart-Health-Center"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Server Site</h1>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full h-[180px]" src={food} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#5E4D3E] text-white">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <GiDividedSquare className="text-xl font-bold text-[pink]" />
              <h1>Spicy Food</h1>
            </div>

            <Link
              to="https://spicy-food-27187.web.app/"
              className=" font-bold flex items-center gap-x-2"
            >
              <TbWorld className="text-xl font-bold text-[#b1fb43]"></TbWorld>
              <h1>Live Link</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Spicy-Food"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Client Site</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Spicy-Food"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Server Site</h1>
            </Link>
          </div>
        </div>

        <div className="card w-full bg-base-100 shadow-xl ">
          <figure>
            <img className="w-full h-[180px]" src={event} alt="Shoes" />
          </figure>
          <div className="card-body bg-[#5E4D3E] text-white">
            <div className="card-title font-extrabold flex items-center gap-x-2">
              <GiDividedSquare className="text-xl font-bold text-[pink]" />
              <h1>Event Management</h1>
            </div>

            <Link
              to="https://event-management-assignm-2c740.web.app/"
              className=" font-bold flex items-center gap-x-2"
            >
              <TbWorld className="text-xl font-bold text-[#b1fb43]"></TbWorld>
              <h1>Live Link</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Event-Management"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Client Site</h1>
            </Link>

            <Link
              to="https://github.com/Md-Nadim-Mir/Event-Management"
              className=" font-bold flex items-center gap-x-2"
            >
              <FaGithub className="text-xl font-bold text-red-500"></FaGithub>
              <h1>Server Site</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

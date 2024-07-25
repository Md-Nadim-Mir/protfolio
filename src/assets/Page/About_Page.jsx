import React from "react";
import About from "../Components/About";
import Educational_Info from "../Components/Educational_Info";
import { Helmet } from "react-helmet";

const About_Page = () => {
  return (
    <div>
      <Helmet>
        <title>Nadim Protfolio | About </title>
      </Helmet>
      <About></About>
      <Educational_Info></Educational_Info>
    </div>
  );
};

export default About_Page;

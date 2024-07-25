import About from "../Components/About";
import Contract from "../Components/Contract";
import Educational_Info from "../Components/Educational_Info";
import Intro from "../Components/Intro";
import Navbar from "../Components/Navbar";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      {/* dynamic-beef.surge.sh */}
      <Intro></Intro>
      <About></About>
      <Educational_Info></Educational_Info>
      <Skills></Skills>
      <Projects></Projects>
      <Contract></Contract>
      <Helmet>
        <title>Nadim Protfolio | Home </title>
      </Helmet>
    </div>
  );
};

export default Home;

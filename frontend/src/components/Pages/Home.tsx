import React from "react";
import Redirect from "../FrontPageComponents/Redirect/Redirect";
import Lander from "../FrontPageComponents/Lander/Lander";
import Intro from "../FrontPageComponents/WorldIntro/Intro";
import AboutUs from "../FrontPageComponents/About/AboutUs";
import StyledHome from "./Home.style";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Lander />
      <AboutUs />
      <Intro />
      <Redirect />
    </StyledHome>
  );
};

export default Home;

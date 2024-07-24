import React from "react";
import RedirectToShop from "../FrontPageComponents/Redirect/RedirectToShop";
import Lander from "../FrontPageComponents/Lander/Lander";
import Intro from "../FrontPageComponents/WorldIntro/Intro";
import AboutUs from "../FrontPageComponents/About/AboutUs";
import StyledHome from "./Home.style";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Lander />
      <Intro />
      <AboutUs />
      <RedirectToShop />
    </StyledHome>
  );
};

export default Home;

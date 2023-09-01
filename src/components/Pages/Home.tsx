import React from "react";
import { MissionPromo } from "../FrontPageComponents/MissionPromo";
import { RedirectToShop } from "../FrontPageComponents/RedirectToShop";
import Lander from "../FrontPageComponents/Lander/Lander";
import Intro from "../FrontPageComponents/WorldIntro/Intro";
import StyledHome from "./Home.style";

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Lander />
      <Intro />
      <MissionPromo />
      <RedirectToShop />
    </StyledHome>
  );
};

export default Home;

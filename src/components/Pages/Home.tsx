import React from "react";
import { MissionPromo } from "../FrontPageComponents/MissionPromo";
import { RedirectToShop } from "../FrontPageComponents/RedirectToShop";
import Lander from "../FrontPageComponents/Lander/Lander";
import Intro from "../FrontPageComponents/WorldIntro/Intro";

const Home: React.FC = () => {
  return (
    <div>
      <Lander />
      <Intro />
      <MissionPromo />
      <RedirectToShop />
    </div>
  );
};

export default Home;

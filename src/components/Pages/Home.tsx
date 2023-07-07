import React from "react";
import { MissionPromo } from "../FrontPageComponents/MissionPromo";
import { NewReleases } from "../FrontPageComponents/NewReleases";
import { RedirectToShop } from "../FrontPageComponents/RedirectToShop";
import { Lander } from "../FrontPageComponents/Lander";

const Home: React.FC = () => {
  return (
    <div>
      <Lander />
      <NewReleases />
      <MissionPromo />
      <RedirectToShop />
    </div>
  );
};

export default Home;

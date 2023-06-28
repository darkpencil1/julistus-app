import React from "react";
import { MissionPromo } from "../FrontPageComponents/MissionPromo";
import { NewReleases } from "../FrontPageComponents/NewReleases";
import { RedirectToShop } from "../FrontPageComponents/RedirectToShop";
import { Welcome } from "../FrontPageComponents/Welcome";

const Home: React.FC = () => {
  return (
    <div>
      <Welcome />
      <NewReleases />
      <MissionPromo />
      <RedirectToShop />
    </div>
  );
};

export default Home;

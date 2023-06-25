import React from "react";
import { NewReleases } from "../FrontPageComponents/NewReleases";
import { Welcome } from "../FrontPageComponents/Welcome";

const Home: React.FC = () => {
  return (
    <div>
      <Welcome />
      <NewReleases />
    </div>
  );
};

export default Home;

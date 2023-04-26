import React from "react";
import { Promotion } from "../FrontPageComponents/Promotion";
import { Welcome } from "../FrontPageComponents/Welcome";

interface Props {
  // add any props here
}

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <Welcome />
      <Promotion />
    </div>
  );
};

export default Home;

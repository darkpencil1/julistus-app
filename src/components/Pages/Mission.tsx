import React from "react";
import Link from "../baseComponents/Link";
import StyledMission from "./Mission.style";

const Mission: React.FC = () => {
  return (
    <StyledMission>
      <h2>Sivu on kesken. Palaa myöhemmin näkemään oikea sisältö.</h2>
      <Link content="Kotiin" href="/" />
    </StyledMission>
  );
};

export default Mission;

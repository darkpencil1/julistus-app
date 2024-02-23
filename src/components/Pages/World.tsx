import React from "react";
import Link from "../baseComponents/Link";
import StyledWorld from "./World.style";

const World: React.FC = () => {
  return (
    <StyledWorld>
      <h2>Sivu on kesken. Palaa myöhemmin näkemään oikea sisältö.</h2>
      <Link content="Kotiin" href="/" />
    </StyledWorld>
  );
};

export default World;

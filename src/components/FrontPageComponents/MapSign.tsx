import React from "react";
import siipimerkki from "../../resources/images/siipimerkki-valkoinen.svg";
import Image from "../baseComponents/Image.style";
import StyledMapSign from "./MapSign.style";

type MapSignProps = {
  height?: number;
  active: boolean;
};

const MapSign = ({ height, active }: MapSignProps) => {
  return (
    <StyledMapSign height={height ? height : 60} active={active}>
      <div className="sign__circle">
        <Image src={siipimerkki} height="40px" />
      </div>
    </StyledMapSign>
  );
};
export default MapSign;

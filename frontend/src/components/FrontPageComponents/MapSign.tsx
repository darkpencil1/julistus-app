import siipimerkki from "../../resources/images/siipimerkki-valkoinen.svg";
import Image from "../baseComponents/Image.style";
import StyledMapSign from "./MapSign.style";

type MapSignProps = {
  size?: number;
  active: boolean;
  notRoundedSide: "left" | "right";
};

const MapSign = ({ size, active, notRoundedSide }: MapSignProps) => {
  return (
    <StyledMapSign
      size={size ? size : 60}
      active={active}
      notRoundedSide={notRoundedSide}
    >
      <div className="sign__circle">
        <Image src={siipimerkki} height="40px" />
      </div>
    </StyledMapSign>
  );
};
export default MapSign;

import MapSign from "./MapSign";
import Image from "../baseComponents/Image.style";
import StyledMapLocation from "./MapLocation.style";

type MapLocationProps = {
  key: number;
  active: boolean;
  top: string;
  left: string;
  img: string;
  hasWideImg: boolean;
};

const MapLocation = ({
  top,
  left,
  img,
  active,
  hasWideImg,
}: MapLocationProps) => {
  return (
    <StyledMapLocation
      top={top}
      left={left}
      active={active}
      hasWideImg={hasWideImg}
    >
      <div className="location__item-container">
        <MapSign active={active} />
        <Image className="location__img" src={img} />
      </div>
    </StyledMapLocation>
  );
};
export default MapLocation;

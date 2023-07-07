import MapSign from "./MapSign";
import Image from "../baseComponents/Image.style";
import StyledMapLocation from "./MapLocation.style";

type MapLocationProps = {
  top: string;
  left: string;
  img: string;
};

const MapLocation = ({ top, left, img }: MapLocationProps) => {
  return (
    <StyledMapLocation top={top} left={left}>
      <div className="location__item-container">
        <MapSign />
        <Image className="location__img" src={img} />
      </div>
    </StyledMapLocation>
  );
};
export default MapLocation;

import MapSign from "./MapSign";
import Image from "../baseComponents/Image.style";
import StyledMapLocation from "./MapLocation.style";
import { useEffect, useState } from "react";

type MapLocationProps = {
  key: number;
  active: boolean;
  top: number;
  left: number;
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
  const [signNotRoundedSide, setSignNotRoundedSide] = useState<
    "left" | "right"
  >("right");

  useEffect(() => {
    if (left > 70) setSignNotRoundedSide("left");
  }, []);

  return (
    <StyledMapLocation
      top={top}
      left={left}
      active={active}
      hasWideImg={hasWideImg}
    >
      <MapSign active={active} notRoundedSide={signNotRoundedSide} />
      <Image className="location__img" src={img} />
    </StyledMapLocation>
  );
};
export default MapLocation;

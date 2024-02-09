import { Orientation } from "../../../resources/interfaces/ProductInterface";
import StyledLanderImg, { StyledLanderImgProps } from "./LanderImg.style";

export type LanderImgProps = {
  img: string;
  icon: React.ReactNode;
  flexDirection: StyledLanderImgProps["flexDirection"];
  top: number;
  left: number;
  orientation: Orientation;
  className?: string;
};

const LanderImg = ({
  img,
  icon,
  flexDirection,
  top,
  left,
  orientation,
  className,
}: LanderImgProps) => {
  return (
    <StyledLanderImg
      top={top}
      left={left}
      orientation={orientation}
      flexDirection={flexDirection}
      className={className}
    >
      <img className="lander__product-img" src={img} />
      {icon}
    </StyledLanderImg>
  );
};
export default LanderImg;

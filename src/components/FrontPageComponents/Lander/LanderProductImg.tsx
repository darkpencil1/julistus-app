import { Orientation } from "../../../resources/interfaces/ProductInterface";
import StyledLanderProductImg from "./LanderProductImg.style";

export type LanderProductImgProps = {
  img: string;
  top: number;
  left: number;
  orientation: Orientation;
};

const LanderProductImg = ({
  img,
  top,
  left,
  orientation,
}: LanderProductImgProps) => {
  return (
    <StyledLanderProductImg top={top} left={left} orientation={orientation}>
      <img className="lander__product-img" src={img} />
    </StyledLanderProductImg>
  );
};
export default LanderProductImg;

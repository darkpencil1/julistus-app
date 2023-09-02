import heart from "../../../resources/images/sydän1.png";
import magnifier from "../../../resources/images/suurennuslasi-kuvake.png";
import poster from "../../../resources/images/julisteproto1.png";
import LanderIcon, { LanderIconProps } from "./LanderIcon";
import LanderProductImg, { LanderProductImgProps } from "./LanderProductImg";
import StyledLanderImgContainer from "./LanderImgContainer.style";
import { Orientation } from "../../../resources/interfaces/ProductInterface";

const iconPositions: Array<LanderIconProps> = [
  { icon: magnifier, top: 60, left: 10, size: "sm" },
  { icon: magnifier, top: 20, left: 80, size: "md" },
  { icon: magnifier, top: 90, left: 20, size: "lg" },
];

const imgPositions: Array<LanderProductImgProps> = [
  { img: poster, top: 10, left: -30, orientation: Orientation.LANDSCAPE },
  { img: poster, top: 60, left: 50, orientation: Orientation.LANDSCAPE },
];

const LanderImgContainer = () => {
  return (
    <StyledLanderImgContainer>
      <img className="lander__img-main" src={heart} />
      {iconPositions.map((icon: LanderIconProps, i: number) => {
        return (
          <LanderIcon
            icon={icon.icon}
            top={icon.top}
            left={icon.left}
            size={icon.size}
            key={i}
          />
        );
      })}
      {imgPositions.map((img: LanderProductImgProps, i: number) => {
        return (
          <LanderProductImg
            img={img.img}
            top={img.top}
            left={img.left}
            orientation={img.orientation}
            key={i}
          />
        );
      })}
    </StyledLanderImgContainer>
  );
};
export default LanderImgContainer;

import heart from "../../../resources/images/sydän1.png";
import magnifier from "../../../resources/images/suurennuslasi-kuvake.png";
import LanderIcon, { LanderIconProps } from "./LanderIcon";
import StyledLanderImgContainer from "./LanderImgContainer.style";

const iconPositions: Array<LanderIconProps> = [
  { icon: magnifier, top: 80, left: 50, size: "sm" },
  { icon: magnifier, top: 20, left: 80, size: "md" },
  { icon: magnifier, top: 50, left: 10, size: "lg" },
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
    </StyledLanderImgContainer>
  );
};
export default LanderImgContainer;

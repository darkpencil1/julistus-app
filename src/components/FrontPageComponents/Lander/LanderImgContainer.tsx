import heart from "../../../resources/images/sydän1.png";
import magnifier from "../../../resources/images/suurennuslasi-kuvake.png";
import poster from "../../../resources/images/julisteproto1.png";
import LanderIcon, { LanderIconProps } from "./LanderIcon";
import LanderProductImg, { LanderProductImgProps } from "./LanderProductImg";
import StyledLanderImgContainer from "./LanderImgContainer.style";
import { Orientation } from "../../../resources/interfaces/ProductInterface";
import { motion, Variants } from "framer-motion";

const iconPositions: Array<LanderIconProps> = [
  { icon: magnifier, top: 60, left: 10, size: "sm" },
  { icon: magnifier, top: 20, left: 80, size: "md" },
  { icon: magnifier, top: 90, left: 20, size: "lg" },
];

const imgPositions: Array<LanderProductImgProps> = [
  { img: poster, top: 10, left: -30, orientation: Orientation.LANDSCAPE },
  { img: poster, top: 60, left: 50, orientation: Orientation.LANDSCAPE },
];

const heartVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      bounce: 0.35,
      damping: 12,
      staggerChildren: 1,
    },
  },
};

const imgVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      bounce: 0.35,
      damping: 12,
    },
  },
};

const LanderImgContainer = () => {
  return (
    <StyledLanderImgContainer>
      <motion.img
        animate="animate"
        variants={heartVariant}
        className="lander__img-main"
        src={heart}
      />
      {iconPositions.map((icon: LanderIconProps, i: number) => {
        return (
          <motion.div animate="animate" variants={imgVariant} key={i}>
            <LanderIcon
              icon={icon.icon}
              top={icon.top}
              left={icon.left}
              size={icon.size}
            />
          </motion.div>
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

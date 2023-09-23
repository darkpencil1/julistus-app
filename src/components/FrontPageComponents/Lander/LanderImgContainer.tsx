import heart from "../../../resources/images/sydän2.png";
import MapLines from "./MapLines";
import magnifier from "../../../resources/images/suurennuslasi-kuvake.png";
import heartIcon from "../../../resources/images/goldenheart.png";
import poster from "../../../resources/images/julisteproto1.png";
import LanderIcon, { LanderIconProps } from "./LanderIcon";
import LanderProductImg, { LanderProductImgProps } from "./LanderProductImg";
import StyledLanderImgContainer from "./LanderImgContainer.style";
import { Orientation } from "../../../resources/interfaces/ProductInterface";
import { motion, Variants } from "framer-motion";
import MapLine2 from "./MapLines/MapLine2";

const iconPositions: Array<LanderIconProps> = [
  { icon: magnifier, top: 60, left: 10, size: "sm" },
  { icon: heartIcon, top: 20, left: 90, size: "md" },
  { icon: magnifier, top: 90, left: 20, size: "lg" },
  { icon: heartIcon, top: -10, left: 40, size: "md" },
];

const imgPositions: Array<LanderProductImgProps> = [
  { img: poster, top: 10, left: -30, orientation: Orientation.LANDSCAPE },
  { img: poster, top: 500, left: 700, orientation: Orientation.LANDSCAPE },
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
    },
  },
};

const imgVariant: Variants = {
  animate: {
    opacity: [0, 1],
  },
  hidden: {
    scale: 0,
  },
};

const LanderImgContainer = () => {
  return (
    <StyledLanderImgContainer>
      <div className="lander__heart-container">
        <motion.img
          animate="animate"
          variants={heartVariant}
          className="lander__heart"
          src={heart}
        />
        <MapLine2 size={700} />
      </div>
      {iconPositions.map((icon: LanderIconProps, i: number) => {
        return (
          <motion.div
            animate="animate"
            variants={imgVariant}
            transition={{
              delay: i === 0 ? 0.6 : i * 0.2,
              duration: 0.1,
              type: "spring",
              stiffness: 100,
              bounce: 0.35,
              damping: 16,
            }}
            key={i}
          >
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
          <motion.div
            animate="animate"
            variants={imgVariant}
            transition={{
              delay: i === 0 ? 1.2 : i * 1.6,
              duration: 0.3,
              type: "tween",
            }}
            key={i}
          >
            <LanderProductImg
              img={img.img}
              top={img.top}
              left={img.left}
              orientation={img.orientation}
            />
          </motion.div>
        );
      })}
    </StyledLanderImgContainer>
  );
};
export default LanderImgContainer;

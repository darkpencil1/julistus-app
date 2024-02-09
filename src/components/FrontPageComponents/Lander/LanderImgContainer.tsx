import heart from "../../../resources/images/sydän2.png";
import poster from "../../../resources/images/julisteproto1.png";
import tag from "../../../resources/images/saavutusmerkki5.png";
import StyledLanderImgContainer from "./LanderImgContainer.style";
import { Orientation } from "../../../resources/interfaces/ProductInterface";
import { motion, Variants } from "framer-motion";
import MapLine2 from "./MapLines/MapLine2";
import LanderImg, { LanderImgProps } from "./LanderImg";
import LanderQuestIcon from "./LanderQuestIcon";
import LanderTagIcon from "./LanderTagIcon";

const imgPositions: Array<LanderImgProps> = [
  {
    img: poster,
    top: 0,
    left: -150,
    orientation: Orientation.LANDSCAPE,
    icon: <LanderQuestIcon />,
    flexDirection: "column-reverse",
  },
  {
    img: tag,
    top: -150,
    left: 300,
    orientation: Orientation.PORTRAIT,
    icon: <LanderTagIcon />,
    flexDirection: "row-reverse",
  },
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
      {imgPositions.map((img: LanderImgProps, i: number) => {
        return (
          <motion.div
            className={`lander__product-img-parent--${i}`}
            animate="animate"
            variants={imgVariant}
            transition={{
              delay: i === 0 ? 1.2 : i * 1.6,
              duration: 0.3,
              type: "tween",
            }}
            key={`lander__product-img--${i}`}
          >
            <LanderImg
              img={img.img}
              top={img.top}
              left={img.left}
              orientation={img.orientation}
              flexDirection={img.flexDirection}
              icon={img.icon}
              className={`lander__product-img--${i}`}
            />
          </motion.div>
        );
      })}
    </StyledLanderImgContainer>
  );
};
export default LanderImgContainer;

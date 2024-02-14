import heart from "../../../resources/images/sydän2.png";
import StyledLanderImgContainer from "./LanderImgContainer.style";
import { motion, Variants } from "framer-motion";
import MapLine2 from "./MapLines/MapLine2";
import LanderQuestImg from "./LanderQuestImg";
import LanderTagImg from "./LanderTagImg";
import LanderMoreImg from "./LanderMoreImg";

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
        <MapLine2 />
      </div>
      <LanderQuestImg index={1} />
      <LanderTagImg index={2} />
      <LanderMoreImg index={3} />
    </StyledLanderImgContainer>
  );
};
export default LanderImgContainer;

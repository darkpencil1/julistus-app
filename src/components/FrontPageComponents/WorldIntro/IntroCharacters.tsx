import character from "../../../resources/images/character-concept.png";
import heart from "../../../resources/images/big-heart.png";
import plusIcon from "../../../resources/images/plus-icon-no-container.svg";
import StyledIntroCharacters from "./IntroCharacters.style";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import LanderSwarmIcon from "../Lander/LanderSwarmIcon";

const charVariant: Variants = {
  animate: {
    translateX: [-100, 0],
    opacity: [0, 100],
  },
  animate2: {
    translateX: [100, 0],
    opacity: [0, 100],
  },
  hidden: { opacity: 0 },
};
const IntroCharacters = () => {
  const charRef = useRef(null);
  const charInView = useInView(charRef, { once: true });

  return (
    <StyledIntroCharacters>
      <div className="char__container" ref={charRef}>
        <motion.div
          animate={charInView ? "animate" : "hidden"}
          transition={{
            delay: 0.5,
            duration: 0.3,
            type: "tween",
          }}
          variants={charVariant}
          className="intro__char-img-container"
        >
          <img className="intro__char-img" src={character} />
          <h3>Kutsumuksen seuraajat</h3>
        </motion.div>
        <motion.div
          animate={charInView ? "animate2" : "hidden"}
          transition={{
            delay: 1,
            duration: 0.3,
            type: "tween",
          }}
          variants={charVariant}
          className="intro__heart-img-container"
        >
          <img className="intro__heart-img" src={heart} />
          <h3>Sydänmaa</h3>
        </motion.div>
      </div>
      <motion.div
        animate={charInView ? "animate" : "hidden"}
        transition={{
          delay: 1.5,
          duration: 0.3,
          type: "tween",
        }}
        variants={charVariant}
        className="intro__char-text-container"
      >
        <LanderSwarmIcon icon={plusIcon} index={1} />
        <div className="intro__char-text">
          <h3>Ja paljon muuta</h3>
          <p>...päivitetään tähän myöhemmin</p>
        </div>
        <LanderSwarmIcon icon={plusIcon} index={2} />
        <LanderSwarmIcon icon={plusIcon} index={3} />
      </motion.div>
    </StyledIntroCharacters>
  );
};

export default IntroCharacters;

import character from "../../../resources/images/character.png";
import badguys from "../../../resources/images/badguys.png";
import building from "../../../resources/images/building1.png";
import heart from "../../../resources/images/sydän1.png";
import mock_icon from "../../../resources/images/nuoli-kuvake.png";
import heart_icon from "../../../resources/images/sydän-keltainen.png";
import StyledIntroCharacters from "./IntroCharacters.style";
import CharacterImg, { CharacterImgProps } from "./CharacterImg";
import { motion, useAnimate, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const worldElements: Array<CharacterImgProps> = [
  { img: building, icon: mock_icon, name: "Tärkeä paikka" },
  { img: character, icon: heart_icon, name: "Sankarit" },
  { img: badguys, icon: mock_icon, name: "Haasteiden joukko" },
];

const heartVariant: Variants = {
  animate: {
    opacity: [0, 100],
    scale: [0, 1],
    transition: {
      delay: 0.2,
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      bounce: 50,
      damping: 7,
    },
  },
  hidden: { opacity: 0 },
};
const charVariant: Variants = {
  animate: {
    translateX: [-100, 0],
    opacity: [0, 100],
  },
  hidden: { opacity: 0 },
};
const IntroCharacters = () => {
  const heartRef = useRef(null);
  const heartInView = useInView(heartRef, { once: true });
  const charRef = useRef(null);
  const charInView = useInView(charRef, { once: true });

  return (
    <StyledIntroCharacters ref={heartRef}>
      <motion.img
        animate={heartInView ? "animate" : "hidden"}
        variants={heartVariant}
        className="char__heart"
        src={heart}
      />
      <div className="char__container" ref={charRef}>
        {worldElements.map((elem: CharacterImgProps, i: number) => {
          return (
            <motion.div
              animate={charInView ? "animate" : "hidden"}
              transition={{
                delay: i * 0.3,
                duration: 0.3,
                type: "tween",
              }}
              variants={charVariant}
              key={i}
            >
              <CharacterImg img={elem.img} icon={elem.icon} name={elem.name} />
            </motion.div>
          );
        })}
      </div>
    </StyledIntroCharacters>
  );
};

export default IntroCharacters;

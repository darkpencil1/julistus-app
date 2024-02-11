import LanderQuestIcon from "./LanderQuestIcon";
import StyledLanderQuestImg from "./LanderQuestImg.style";
import icon from "../../../resources/images/quest-icon.svg";
import poster from "../../../resources/images/julisteproto1.png";
import { Variants } from "framer-motion";
import LanderSwarmIcon from "./LanderSwarmIcon";

const swarm = [icon, icon, icon];

const imgVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
  },
};
const LanderQuestImg = (props: { index: number }) => {
  //Index determines the animation order in relation to other images in lander
  const { index } = props;

  return (
    <StyledLanderQuestImg
      animate="animate"
      variants={imgVariant}
      transition={{
        delay: index,
        type: "spring",
        stiffness: 100,
        bounce: 0.35,
        damping: 12,
      }}
    >
      <LanderQuestIcon />
      <img className="lander__product-img" src={poster} />
      {swarm.map((icon: string, i: number) => {
        return (
          <LanderSwarmIcon
            icon={icon}
            index={i}
            key={`swarm__icon--${index}`}
          />
        );
      })}
    </StyledLanderQuestImg>
  );
};
export default LanderQuestImg;

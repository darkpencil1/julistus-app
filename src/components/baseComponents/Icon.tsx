import { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import StyledIcon from "./Icon.style";
import { Size } from "./Icon.style";

type IconProps = {
  icon: string;
  size: Size;
  delay?: number;
  play?: boolean;
};

const Icon = ({ icon, size, delay, play }: IconProps) => {
  const [playAnim, setPlayAnim] = useState<boolean>(play ? play : false);

  useEffect(() => {
    if (play) setPlayAnim(play);
  }, [play]);

  const valueVariant: Variants = {
    animate: {
      opacity: [0, 1],
      scale: [0, 1],
      transition: {
        delay: delay ? delay : 0,
        duration: 0.3,
        type: "spring",
      },
    },
    hidden: { opacity: 0 },
  };
  return (
    <StyledIcon
      animate={playAnim ? "animate" : "hidden"}
      variants={valueVariant}
      size={size}
    >
      <img className="icon__main" src={icon} />
    </StyledIcon>
  );
};

export default Icon;

import { useRef, useState } from "react";
import StyledValueItem from "./ValueItem.style";
import { Value } from "./values";
import { AnimatePresence, motion, useInView, Variants } from "framer-motion";
import colors from "../../resources/styles/baseColors";

type ValueItemProps = {
  value: Value;
  delay: number;
};

const valueVariant: Variants = {
  animate: {
    opacity: [0, 1],
    scale: [0, 1],
  },
  hidden: { opacity: 0 },
};

const descVariant: Variants = {
  animate: {
    opacity: [0, 1],
  },
  hidden: { opacity: 0 },
  exit: { opacity: [0, 1] },
};

const ValueItem = ({ value, delay }: ValueItemProps) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const valuesInView = useInView(containerRef, { once: true });

  return (
    <StyledValueItem
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={valuesInView ? "animate" : "hidden"}
      variants={valueVariant}
      transition={{
        delay: delay,
        type: "spring",
        stiffness: 500,
        bounce: 100,
        damping: 20,
      }}
      ref={containerRef}
    >
      <h2>{value.name}</h2>
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial="hidden"
            animate="animate"
            exit="exit"
            variants={descVariant}
            transition={{
              delay: 0.1,
              duration: 0.3,
            }}
          >
            {value.desc}
          </motion.p>
        )}
      </AnimatePresence>
    </StyledValueItem>
  );
};

export default ValueItem;

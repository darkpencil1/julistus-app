import { useRef, useState } from "react";
import StyledValueItem from "./ValueItem.style";
import { Value } from "./values";
import { useInView, Variants } from "framer-motion";

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
      {hovered && <p>{value.desc}</p>}
    </StyledValueItem>
  );
};

export default ValueItem;

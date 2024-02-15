import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type ValueProps = {
  name: string;
  delay: number;
};

const nameVariant: Variants = {
  animate: {
    opacity: [0, 1],
    translateX: [-50, 0],
  },
  hidden: { opacity: 0 },
};

const Value = ({ name, delay }: ValueProps) => {
  const valueRef = useRef(null);
  const valuesInView = useInView(valueRef, { once: true });

  return (
    <div ref={valueRef} className="about-us__value">
      <motion.h2
        animate={valuesInView ? "animate" : "hidden"}
        transition={{
          delay: delay,
          duration: 0.2,
        }}
        variants={nameVariant}
      >
        {name}
      </motion.h2>
    </div>
  );
};

export default Value;

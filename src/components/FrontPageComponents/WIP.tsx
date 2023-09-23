import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import StyledWIP from "./WIP.style";

const WIP = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyledWIP show={show}>
      <span
        onClick={() => {
          setShow(!show);
        }}
      >
        &#9432; WIP
      </span>
      {show && (
        <motion.div
          animate={{ opacity: [0, 1] }}
          exit={{ opacity: [1, 0] }}
          className="wip__message"
        >
          <p>
            Tämä on keskeneräinen prototyyppi eikä siten välttämättä edusta
            lopullista tulosta. Sivu käyttää demotarkoituksessa kuvia, jotka
            ovat <a href="https://www.imadreamwalker.com/">imadreamwalker</a> ja{" "}
            <a href="https://www.blizzard.com/en-us/">Blizzard Entertainment</a>{" "}
            omaisuutta.
          </p>
        </motion.div>
      )}
    </StyledWIP>
  );
};

export default WIP;

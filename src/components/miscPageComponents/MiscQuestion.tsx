import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { QA } from "../../resources/misc/questions";
import StyledMiscQuestion from "./MiscQuestion.style";
import dropdownArrow from "../../resources/images/dropdown_arrow.svg";

type MiscQuestionProps = {
  qa: QA;
};

const MiscQuestion = ({ qa }: MiscQuestionProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyledMiscQuestion id={`qa-${qa.id}`} onClick={() => setShow(!show)}>
      <div className="misc__question-container">
        <h3>{qa.question}</h3>
        <motion.img
          animate={{ rotate: show ? 180 : 0 }}
          className="misc__dropdown-arrow"
          src={dropdownArrow}
        />
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0, overflow: "hidden" }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            layout
          >
            <p>{qa.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledMiscQuestion>
  );
};

export default MiscQuestion;

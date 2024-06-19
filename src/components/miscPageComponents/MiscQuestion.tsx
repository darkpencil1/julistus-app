import { useState } from "react";
import { QA } from "../../resources/misc/questions";
import StyledMiscQuestion from "./MiscQuestion.style";

type MiscQuestionProps = {
  qa: QA;
};
const MiscQuestion = ({ qa }: MiscQuestionProps) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <StyledMiscQuestion onClick={() => setShow(!show)}>
      <h2>{qa.question}</h2>
      {show && <p>{qa.answer}</p>}
    </StyledMiscQuestion>
  );
};

export default MiscQuestion;

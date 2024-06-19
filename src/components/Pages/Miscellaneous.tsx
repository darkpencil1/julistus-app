import React from "react";
import questions, { QA } from "../../resources/misc/questions";
import MiscQuestion from "../miscPageComponents/MiscQuestion";
import StyledMiscellaneousPage from "./Miscellaneous.style";

const Miscellaneous: React.FC = () => {
  return (
    <StyledMiscellaneousPage>
      <div className="misc__intro-text-container">
        <h1>Sekalainen sivu kaikkea</h1>
        <h3>Ota yhteyttä tai lue kysymyksiä ja vastauksia</h3>
        <p>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, officia
          excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem
          pariatur mollit ex esse exercitation amet. Nisi anim cupidatat
          excepteur.
        </p>
      </div>
      <div className="misc__qa-container">
        {questions.map((qa: QA) => {
          return <MiscQuestion qa={qa} />;
        })}
      </div>
    </StyledMiscellaneousPage>
  );
};

export default Miscellaneous;

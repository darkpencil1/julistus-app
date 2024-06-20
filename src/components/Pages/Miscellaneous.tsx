import React from "react";
import questions, { QA } from "../../resources/misc/questions";
import MiscContactForm from "../miscPageComponents/MiscContactForm";
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

      <div id="yhteydenotto" className="misc__contact-container">
        <div className="misc__banner">
          <h3>Ota yhteyttä</h3>
        </div>
        <div className="misc__contact-text-container">
          <h4>
            Kysymyksiä, ideoita, palautetta, mitä vain - laita viestiä tähän
            luukkuun:{" "}
            <a href="mailto:ville&#64;yritys&#46;com">
              ville&#64;yritys&#46;fi
            </a>
          </h4>
        </div>
      </div>

      <div id="ukk" className="misc__qa-container">
        <div className="misc__banner">
          <h3>UKK</h3>
        </div>
        {questions.map((qa: QA) => {
          return <MiscQuestion qa={qa} />;
        })}
      </div>
    </StyledMiscellaneousPage>
  );
};

export default Miscellaneous;

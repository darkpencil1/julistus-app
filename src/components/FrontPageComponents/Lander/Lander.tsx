import StyledLander from "./Lander.style";
import Col from "../../baseComponents/Col.style";
import LanderImgContainer from "./LanderImgContainer";
import Button from "../../baseComponents/Button";
import Link from "../../baseComponents/Link";

const Lander = () => {
  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Seikkailutaidetta</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
        <p>
          Julisteita, pinnejä ja merkkejä. Esineitä, jotka kuvaavat kutsumustasi
          asiaan kuuluvalla eeppisyydellä.
        </p>
        <Link content="Kauppaan" href="/kauppa" />
      </Col>
      <LanderImgContainer />
    </StyledLander>
  );
};
export default Lander;

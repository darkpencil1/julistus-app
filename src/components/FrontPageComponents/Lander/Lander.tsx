import StyledLander from "./Lander.style";
import Col from "../../baseComponents/Col.style";
import LanderImgContainer from "./LanderImgContainer";
import Button from "../../baseComponents/Button";

const Lander = () => {
  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Fantasiataidetta</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
        <p>
          Julisteita, pinnejä ja merkkejä. Esineitä, jotka kuvaavat kutsumustasi
          asiaan kuuluvalla eeppisyydellä.
        </p>
        <Button type="primary" size="lg" text="Kauppaan" />
      </Col>
      <LanderImgContainer />
    </StyledLander>
  );
};
export default Lander;

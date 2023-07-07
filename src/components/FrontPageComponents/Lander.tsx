import StyledLander from "./Lander.style";
import Col from "../baseComponents/Col.style";
import MapLocation from "./MapLocation";
import wide from "../../resources/images/wide1.png";

export const Lander = () => {
  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Julisteita</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
      </Col>
      <Col className="lander__map-container">
        <div className="lander__map-mock">
          <MapLocation top="30%" left="50%" img={wide} />
        </div>
      </Col>
    </StyledLander>
  );
};

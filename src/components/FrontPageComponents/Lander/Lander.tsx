import StyledLander from "./Lander.style";
import Col from "../../baseComponents/Col.style";
import LanderImgContainer from "./LanderImgContainer";

const Lander = () => {
  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Julisteita</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
      </Col>
      <Col className="lander__img-container">
        <LanderImgContainer />
      </Col>
    </StyledLander>
  );
};
export default Lander;

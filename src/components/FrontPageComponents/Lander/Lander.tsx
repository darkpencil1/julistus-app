import StyledLander from "./Lander.style";
import Col from "../../baseComponents/Col.style";
import LanderImgContainer from "./LanderImgContainer";
import Button from "../../baseComponents/Button.style";

const Lander = () => {
  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Fantasiataidetta</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <Button primary size="lg">
          Kauppaan
        </Button>
      </Col>
      <LanderImgContainer />
    </StyledLander>
  );
};
export default Lander;

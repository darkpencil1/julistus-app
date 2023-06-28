import puu from "../../resources/images/puu.png";
import Col from "../baseComponents/Col.style";
import Image from "../baseComponents/Image.style";
import Hyperlink from "../baseComponents/Hyperlink";
import StyledMissionPromo from "./MissionPromo.style";

export const MissionPromo = () => {
  return (
    <StyledMissionPromo>
      <Col className="mission__img-container">
        <Image src={puu} className="mission__img" />
      </Col>
      <Col className="mission__text-container">
        <h1 className="mission__title">Meidän missio</h1>
        <p className="mission__text">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <Hyperlink text="Lue lisää" withArrow={true} />
      </Col>
    </StyledMissionPromo>
  );
};

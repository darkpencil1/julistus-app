import StyledLander from "./Lander.style";
import Col from "../../baseComponents/Col.style";
import LanderImgContainer from "./LanderImgContainer";
import Link from "../../baseComponents/Link";

const Lander = () => {
  return (
    <StyledLander>
      <Col className="lander__text-container">
        <h1 className="lander__title">Seikkailutaidetta</h1>
        <h3 className="lander__subtitle">kutsumuksen seuraamisesta</h3>
        <p>
          Tarjoamme kuvitettuina julisteina tehtäviä mitä kohtaat seuratessasi
          kutsumustasi. Meillä on myös saavutusmerkkejä niiden suorittamisesta.
          Kaikki tarjotaan asiaan kuuluvalla eeppisyydellä.
        </p>
        <Link content="Kauppaan" href="/kauppa" />
      </Col>
      <LanderImgContainer />
    </StyledLander>
  );
};
export default Lander;

import React from "react";
import Row from "../baseComponents/Row.style";
import Col from "../baseComponents/Col.style";
import portrait from "../../resources/images/tasha-1.webp";
import StyledAboutPage from "./About.style";
import Button from "../baseComponents/Button.style";
import Image from "../baseComponents/Image.style";
interface Props {
  // add any props here
}

const About: React.FC<Props> = (props) => {
  return (
    <StyledAboutPage>
      <Row>
        <Col className="text__container">
          <h1>Meistä</h1>
          <p className="lead">
            Esittele tässä kuvat uusista julkaisuista ja vähän fiksua tekstiä.
          </p>
          <p className="paragraph">
            Varsinainen teksti Julistuksen missiosta kuvittaa elämäntarkoituksen
            seuraamista Suomessa. Varsinainen teksti Julistuksen missiosta
            kuvittaa elämäntarkoituksen seuraamista Suomessa. Varsinainen teksti
            Julistuksen missiosta kuvittaa elämäntarkoituksen seuraamista
            Suomessa. Varsinainen teksti Julistuksen missiosta kuvittaa
            elämäntarkoituksen seuraamista Suomessa. Varsinainen teksti
            Julistuksen missiosta kuvittaa elämäntarkoituksen seuraamista
            Suomessa. Varsinainen teksti Julistuksen missiosta kuvittaa
            elämäntarkoituksen seuraamista Suomessa.
          </p>
          <Button>Kauppaan</Button>
        </Col>
        <Col className="image__container">
          <Image src={portrait} />
        </Col>
      </Row>
    </StyledAboutPage>
  );
};

export default About;

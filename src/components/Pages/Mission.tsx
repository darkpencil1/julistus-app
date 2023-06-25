import React from "react";
import Col from "../baseComponents/Col.style";

const Mission: React.FC = () => {
  return (
    <Col className="col-lg-8 col-md-8 col-sm-11 p-lg-2 mx-auto ">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <h1 className="display-4 fw-normal">Missio</h1>
        <p className="lead fw-normal">
          Esittele tässä kuvat uusista julkaisuista ja vähän fiksua tekstiä.
        </p>
        <p className="mt-4 fw-normal">
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
        <a className="btn btn-outline-secondary" href="/kauppa">
          Kauppaan
        </a>
      </div>
    </Col>
  );
};

export default Mission;

import Col from "react-bootstrap/Col";

export const Promotion = (props: {}) => {
  return (
    <Col className="col-md-5 p-lg-2 ms-0 me-auto ">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <h1 className="display-4 fw-normal">Uudet julkaisut</h1>
        <p className="lead fw-normal">
          Esittele tässä kuvat uusista julkaisuista ja vähän fiksua tekstiä.
        </p>
        <a className="btn btn-outline-secondary" href="/kauppa">
          Kauppaan
        </a>
      </div>
    </Col>
  );
};

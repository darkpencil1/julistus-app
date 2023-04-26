import Col from "react-bootstrap/Col";

export const Welcome = (props: {}) => {
  return (
    <Col className="col-md-5 p-lg-2 ms-0 me-auto welcome__container">
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <h1 className="display-4 fw-normal">Punny headline</h1>
        <p className="lead fw-normal">
          And an even wittier subheading to boot. Jumpstart your marketing
          efforts with this example based on Apple’s marketing pages.
        </p>
        <a className="btn btn-outline-secondary" href="#">
          Coming soon
        </a>
      </div>
    </Col>
  );
};

import Col from "react-bootstrap/Col";

export const Welcome = (props: {}) => {
  return (
    <div className="welcome__container">
      <div className="col-md-5 p-lg-2 ms-0 me-auto">
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
          <h1 className="display-4 fw-normal text-white">Punny headline</h1>
          <p className="lead fw-normal text-white">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className="btn btn-secondary" href="#">
            Coming soon
          </a>
        </div>
      </div>
    </div>
  );
};

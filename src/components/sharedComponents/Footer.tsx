import Col from "../baseComponents/Col.style";
import StyledFooter from "./Footer.style";
import ig_Logo from "../../resources/images/Instagram_logo_2016.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <footer className="py-3 my-4 mx-5">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              About
            </a>
          </li>
        </ul>
        <div className="social-media-container">
          <Col className="copyright">
            <span>&copy; 2023 Julistus</span>
          </Col>

          <ul className="social-media-list">
            <li>
              <a href="#">
                <img src={ig_Logo} className="bi" width="24" height="24" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
};

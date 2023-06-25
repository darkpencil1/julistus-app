import Col from "../baseComponents/Col.style";
import StyledFooter from "./Footer.style";
import ig_Logo from "../../resources/images/Instagram_logo_2016.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <ul className="">
        <li className="footer__link">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="footer__link">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Features
          </a>
        </li>
        <li className="footer__link">
          <a href="#" className="nav-link px-2 text-body-secondary">
            Pricing
          </a>
        </li>
        <li className="footer__link">
          <a href="#" className="nav-link px-2 text-body-secondary">
            FAQs
          </a>
        </li>
        <li className="footer__link">
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
    </StyledFooter>
  );
};

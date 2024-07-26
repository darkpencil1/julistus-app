import Col from "../baseComponents/Col.style";
import StyledFooter from "./Footer.style";

type FooterLink = {
  text: string;
  link: string;
};
const links: Array<FooterLink> = [
  { text: "FAQ", link: "#/misc#ukk" },
  { text: "Returns", link: "#/misc#qa-1" },
  { text: "Contact", link: "#/misc#yhteydenotto" },
];
const pageLinks: Array<FooterLink> = [
  { text: "Home", link: "/" },
  { text: "Catalog", link: "/catalog" },
  { text: "About", link: "/about" },
  { text: "Shop", link: "/shop" },
];

const socialLinks: Array<FooterLink> = [{ text: "Instagram", link: "#" }];

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__links">
        <div className="footer__link-container">
          <h3>General</h3>
          <ul>
            {links.map((link: FooterLink, i: number) => {
              return (
                <li className="footer__link" key={`footer-general-${i}`}>
                  <a href={link.link}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__link-container">
          <h3>Pages</h3>
          <ul className="footer__page-links">
            {pageLinks.map((link: FooterLink, i: number) => {
              return (
                <li className="footer__link" key={`footer-page-${i}`}>
                  <a href={link.link}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="footer__link-container">
          <h3>Social</h3>
          <ul className="footer__page-links">
            {socialLinks.map((link: FooterLink, i: number) => {
              return (
                <li className="footer__link" key={`footer-social-${i}`}>
                  <a href={link.link}>{link.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Col className="copyright">
        <span>&copy; 2024 Herequest</span>
      </Col>
    </StyledFooter>
  );
};
export default Footer;

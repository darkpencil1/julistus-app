import Col from "../baseComponents/Col.style";
import StyledFooter from "./Footer.style";

type FooterLink = {
  text: string;
  link: string;
};
const links: Array<FooterLink> = [
  { text: "UKK", link: "#/sekalainen" },
  { text: "Palautukset", link: "#/sekalainen" },
  { text: "Ota yhteyttä", link: "#/sekalainen" },
  { text: "Tietosuojaseloste", link: "#" },
];
const pageLinks: Array<FooterLink> = [
  { text: "Koti", link: "/" },
  { text: "Kauppa", link: "/kauppa" },
  { text: "Arkisto", link: "/Arkisto" },
  { text: "Meistä", link: "/meista" },
];

const socialLinks: Array<FooterLink> = [{ text: "Instagram", link: "#" }];

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__links">
        <div className="footer__link-container">
          <h3>Yleistä</h3>
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
          <h3>Sivut</h3>
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
          <h3>Some</h3>
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
        <span>&copy; 2024 Kuva & Kutsumus</span>
      </Col>
    </StyledFooter>
  );
};
export default Footer;

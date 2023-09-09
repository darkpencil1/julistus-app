import Image from "../baseComponents/Image.style";
import StyledHeader from "./Header.style";
import logo from "../../resources/images/sydänlogo-viiva.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="nav__logo">
        <Image src={logo} alt="Julistus" width="100%" />
      </div>
      <span className="nav__name">KUTSUMUS KAUPPA</span>
      <nav>
        <a href="kauppa">Kauppa</a>
        <a href="missio">Missio</a>
        <a href="meistä">Meistä</a>
      </nav>
    </StyledHeader>
  );
};

export default Header;

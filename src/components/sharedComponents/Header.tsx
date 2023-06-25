import Image from "../baseComponents/Image.style";
import StyledHeader from "./Header.style";
import logo from "../../resources/images/logo1.png";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div className="nav__logo">
        <Image
          src={logo}
          width="150rem"
          className="d-inline-block align-top"
          alt="Julistus"
        />
      </div>
      <nav>
        <a href="/">Koti</a>
        <a href="kauppa">Kauppa</a>
        <a href="missio">Missio</a>
        <a href="meistä">Meistä</a>
      </nav>
    </StyledHeader>
  );
};

export default Header;

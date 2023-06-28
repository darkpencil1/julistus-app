import Row from "../baseComponents/Row.style";
import Image from "../baseComponents/Image.style";
import oksa from "../../resources/images/oksa.png";
import StyledRedirectToShop from "./RedirectToShop.style";
import Button from "../baseComponents/Button.style";

export const RedirectToShop = () => {
  return (
    <StyledRedirectToShop>
      <Button size="xl" primary>
        Kauppaan
      </Button>
      <Row className="redirect__content-container">
        <Image src={oksa} className="mission__img" />
        <h2 className="redirect__text">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </h2>
      </Row>
    </StyledRedirectToShop>
  );
};

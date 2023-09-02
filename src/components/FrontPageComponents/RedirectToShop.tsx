import StyledRedirectToShop from "./RedirectToShop.style";
import Button from "../baseComponents/Button.style";

export const RedirectToShop = () => {
  return (
    <StyledRedirectToShop>
      <Button className="redirect__btn" size="lg" secondary>
        Siirry kauppaan
      </Button>
    </StyledRedirectToShop>
  );
};

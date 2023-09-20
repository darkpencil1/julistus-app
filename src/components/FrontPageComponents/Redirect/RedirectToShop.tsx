import StyledRedirectToShop from "./RedirectToShop.style";
import Button from "../../baseComponents/Button.style";
import Line from "./Line";
import { useRef } from "react";

const RedirectToShop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledRedirectToShop ref={containerRef}>
      <Button className="redirect__btn" size="lg" secondary>
        Siirry kauppaan
      </Button>
      <Line container={containerRef} />
    </StyledRedirectToShop>
  );
};

export default RedirectToShop;

import StyledRedirectToShop from "./RedirectToShop.style";
import Button from "../../baseComponents/Button";
import Line from "./Line";
import { useRef } from "react";

const RedirectToShop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <StyledRedirectToShop ref={containerRef}>
      <Button
        className="redirect__btn"
        size="lg"
        type="secondary"
        text="Siirry kauppaan"
      />
      <Line container={containerRef} />
    </StyledRedirectToShop>
  );
};

export default RedirectToShop;

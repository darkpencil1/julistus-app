import Button from "../baseComponents/Button";
import StyledCartSummary from "./CartSummary.style";

const CartSummary = () => {
  const postalPrice = "5,0€";
  return (
    <StyledCartSummary>
      <h3>Yhteenveto</h3>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title">Ostokset</p>
        <p className="cart__summary-row-price">hinta</p>
      </div>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title">Postitus</p>
        <p className="cart__summary-row-price">{postalPrice}</p>
      </div>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title cart__summary-row-title--bold">
          Yhteensä
        </p>
        <p className="cart__summary-row-price">hinta</p>
      </div>
      <Button text="Siirry kassalle" type="primary" size="md" />
    </StyledCartSummary>
  );
};

export default CartSummary;

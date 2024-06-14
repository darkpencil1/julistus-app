import StyledCartSummary from "./CartSummary.style";

const CartSummary = () => {
  return (
    <StyledCartSummary>
      <h3>Yhteenveto</h3>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title">Ostokset</p>
        <p className="cart__summary-row-price">hinta</p>
      </div>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title">Postitus</p>
        <p className="cart__summary-row-price">hinta</p>
      </div>
    </StyledCartSummary>
  );
};

export default CartSummary;

import CartItemList from "../cartComponents/CartItemList";
import CartSummary from "../cartComponents/CartSummary";
import StyledCart from "./Cart.style";

const Cart = () => {
  return (
    <StyledCart>
      <div className="cart__wrapper">
        <h1>Ostoskori</h1>
        <div className="cart__container">
          <CartItemList />
          <CartSummary />
        </div>
      </div>
    </StyledCart>
  );
};

export default Cart;

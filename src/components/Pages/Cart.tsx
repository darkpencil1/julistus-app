import CartItemList from "../cartComponents/CartItemList";
import StyledCart from "./Cart.style";

const Cart = () => {
  return (
    <StyledCart>
      <div className="cart__container">
        <h1>Ostoskori</h1>
        <CartItemList />
      </div>
    </StyledCart>
  );
};

export default Cart;

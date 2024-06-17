import { useAppContext } from "../../state/contexts/AppContextProvider";
import Link from "../baseComponents/Link";
import CartItemList from "../cartComponents/CartItemList";
import CartSummary from "../cartComponents/CartSummary";
import StyledCart from "./Cart.style";

const Cart = () => {
  const { state } = useAppContext();
  const { cart } = state;
  return (
    <StyledCart>
      <div className="cart">
        <h1>Ostoskori</h1>
        {cart.items.length > 0 ? (
          <div className="cart__container">
            <div className="cart__item-wrapper">
              <CartItemList />
            </div>
            <CartSummary />
          </div>
        ) : (
          <div className="cart__empty-container">
            <h3>Täällä ei ole vielä mitään.</h3>
            <Link content="Kauppaan" href="/kauppa" />
          </div>
        )}
      </div>
    </StyledCart>
  );
};

export default Cart;

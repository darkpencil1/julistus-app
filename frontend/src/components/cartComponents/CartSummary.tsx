import { useEffect, useState } from "react";
import { useAppContext } from "../../state/contexts/AppContextProvider";
import { CartItem } from "../../state/reducers/cartReducer";
import Button from "../baseComponents/Button";
import StyledCartSummary from "./CartSummary.style";

const CartSummary = () => {
  const [itemPrice, setItemPrice] = useState<number>(0);
  const { state } = useAppContext();
  const { cart } = state;
  const postalPrice = 5;

  const calcItemPrice = () => {
    let price = 0;
    for (const item of cart.items) {
      let cartItemPrice = item.price * item.quantity;
      price += cartItemPrice;
    }
    setItemPrice(price);
  };

  useEffect(() => {
    calcItemPrice();
  }, [cart]);

  return (
    <StyledCartSummary>
      <h3>Yhteenveto</h3>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title">Ostokset</p>
        <p className="cart__summary-row-price">{itemPrice}€</p>
      </div>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title">Postitus</p>
        <p className="cart__summary-row-price">{postalPrice}€</p>
      </div>
      <div className="cart__summary-row">
        <p className="cart__summary-row-title cart__summary-row-title--bold">
          Yhteensä
        </p>
        <p className="cart__summary-row-price">{itemPrice + postalPrice}€</p>
      </div>
      <Button text="Siirry kassalle" type="primary" size="md" />
    </StyledCartSummary>
  );
};

export default CartSummary;

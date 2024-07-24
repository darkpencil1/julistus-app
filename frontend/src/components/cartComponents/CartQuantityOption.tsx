import { useAppContext } from "../../state/contexts/AppContextProvider";
import { CartItem } from "../../state/reducers/cartReducer";
import StyledCartQuantityOption from "./CartQuantityOption.style";

type CartQuantityOptionProps = {
  cartItem: CartItem;
};
const CartQuantityOption = ({ cartItem }: CartQuantityOptionProps) => {
  const { changeItemQuantity } = useAppContext();

  return (
    <StyledCartQuantityOption>
      <span
        className="cart__quantity-btn cart__quantity-btn--left"
        onClick={() => changeItemQuantity(false, cartItem)}
      >
        -
      </span>
      <span className="cart__quantity-display">{cartItem.quantity}</span>
      <span
        className="cart__quantity-btn cart__quantity-btn--right"
        onClick={() => changeItemQuantity(true, cartItem)}
      >
        +
      </span>
    </StyledCartQuantityOption>
  );
};

export default CartQuantityOption;

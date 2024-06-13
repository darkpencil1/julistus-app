import { CartItem } from "../../state/reducers/cartReducer";
import StyledCartQuantityOption from "./CartQuantityOption.style";

type CartQuantityOptionProps = {
  cartItem: CartItem;
};
const CartQuantityOption = ({ cartItem }: CartQuantityOptionProps) => {
  return (
    <StyledCartQuantityOption>
      <span className="cart__quantity-btn cart__quantity-btn--left">+</span>
      <span className="cart__quantity-display">{cartItem.quantity}</span>
      <span className="cart__quantity-btn cart__quantity-btn--right">-</span>
    </StyledCartQuantityOption>
  );
};

export default CartQuantityOption;

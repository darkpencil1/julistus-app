import { useAppContext } from "../../state/contexts/AppContextProvider";
import StyledCartIcon from "./CartIcon.style";

const CartIcon = () => {
  const { state } = useAppContext();
  const { cart } = state;
  return (
    <StyledCartIcon>
      <div className="cart__icon">
        <div className="cart__icon-number">{cart.items.length}</div>
      </div>
    </StyledCartIcon>
  );
};

export default CartIcon;

import { useAppContext } from "../../state/contexts/AppContextProvider";
import { CartItem } from "../../state/reducers/cartReducer";
import StyledCartItemList from "./CartItemList.style";
import CartQuantityOption from "./CartQuantityOption";

const CartItemList = () => {
  const { state } = useAppContext();
  const { cart } = state;
  return (
    <StyledCartItemList>
      {cart.items.map((item: CartItem) => {
        return (
          <div className="cart__item">
            <img src={item.images[0]} />
            <div className="cart__item-text-container">
              <h4>{item.name}</h4>
              <p>{item.productType}</p>
              <p>{item.price}</p>
            </div>
            <CartQuantityOption cartItem={item} />
          </div>
        );
      })}
    </StyledCartItemList>
  );
};

export default CartItemList;

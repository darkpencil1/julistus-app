import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../state/contexts/AppContextProvider";
import { CartItem } from "../../state/reducers/cartReducer";
import StyledCartItemList from "./CartItemList.style";
import CartQuantityOption from "./CartQuantityOption";

const CartItemList = () => {
  const { state, removeCartItem } = useAppContext();
  const { cart } = state;
  const navigate = useNavigate();

  const navigateToProduct = (item: CartItem) => {
    const productHref = `/tuote?id=${item.id}`;
    navigate(productHref);
  };

  return (
    <StyledCartItemList>
      {cart.items.map((item: CartItem) => {
        return (
          <div className="cart__item">
            <img src={item.images[0]} />
            <div className="cart__item-text-container">
              <h4>
                <a onClick={() => navigateToProduct(item)}>{item.name}</a>
              </h4>
              <p>{item.productType}</p>
              {item.specs.map((spec) => {
                return <p>{spec}</p>;
              })}
              <p className="cart__item-price">{item.price}€</p>
            </div>
            <div className="cart__item-quantity-container">
              <span
                className="cart__item-remove"
                onClick={() => removeCartItem(item)}
              >
                Poista
              </span>
              <CartQuantityOption cartItem={item} />
            </div>
          </div>
        );
      })}
    </StyledCartItemList>
  );
};

export default CartItemList;

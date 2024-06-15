import { DropdownOption } from "../../components/productPageComponents/AddToCartDropdown";
import IProduct from "../../resources/interfaces/ProductInterface";

export type CartProduct = Pick<
  IProduct,
  "id" | "name" | "productType" | "images" | "price"
>;

export interface CartItem extends CartProduct {
  quantity: number;
  specs: DropdownOption["name"][];
}

export type CartState = {
  items: CartItem[];
};

export const initialCartState: CartState = {
  items: [],
};

export type CartAction =
  | { type: "ADD_ITEM"; cartItem: CartItem }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "INCREASE_QUANTITY"; productId: number }
  | { type: "DECREASE_QUANTITY"; productId: number };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(
        (item) => item.id === action.cartItem.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.cartItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.cartItem }],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.productId),
      };
    case "INCREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "DECREASE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;

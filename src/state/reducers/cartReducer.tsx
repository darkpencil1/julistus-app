import IProduct from "../../resources/interfaces/ProductInterface";

export interface CartItem extends IProduct {
  quantity: number;
}

export type CartState = {
  items: CartItem[];
};

export const initialCartState: CartState = {
  items: [],
};

export type CartAction =
  | { type: "ADD_ITEM"; product: IProduct }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "INCREASE_QUANTITY"; productId: number }
  | { type: "DECREASE_QUANTITY"; productId: number };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("ADD_ITEM called with product:", action.product);
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1 }],
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

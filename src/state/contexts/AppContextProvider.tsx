import React, { ReactNode, useReducer, createContext, useEffect } from "react";

import cartReducer, {
  initialCartState,
  CartAction,
  CartState,
  CartItem,
} from "../reducers/cartReducer";

import productReducer, {
  initialProductState,
  ProductAction,
  ProductState,
} from "../reducers/productReducer";
import IProduct from "../../resources/interfaces/ProductInterface";

// Define the combined state and action types
type AppState = {
  cart: CartState;
  product: ProductState;
};

type AppAction = CartAction | ProductAction;

// Combine initial states
const initialState: AppState = {
  cart: initialCartState,
  product: initialProductState,
};

// Combine reducers
const appReducer = (state: AppState, action: AppAction): AppState => {
  return {
    cart: cartReducer(state.cart, action as CartAction),
    product: productReducer(state.product, action as ProductAction),
  };
};

interface AppContextProps {
  state: AppState;
  setProduct: (productId: IProduct["id"]) => void;
  addItemToCart: (product: IProduct) => void;
  changeItemQuantity: (addItem: boolean, cartItem: CartItem) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  //Initialize state and get cart state from localStorage if available
  const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? { ...initial, cart: JSON.parse(savedCart) } : initial;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  const setProduct = (productId: IProduct["id"]) => {
    dispatch({ type: "VIEW_PRODUCT", productId });
  };

  const addItemToCart = (product: IProduct) => {
    dispatch({ type: "ADD_ITEM", product });
  };

  const changeItemQuantity = (addItem: boolean, cartItem: CartItem) => {
    addItem
      ? dispatch({ type: "INCREASE_QUANTITY", productId: cartItem.id })
      : dispatch({ type: "DECREASE_QUANTITY", productId: cartItem.id });
  };

  return (
    <AppContext.Provider
      value={{ state, setProduct, addItemToCart, changeItemQuantity }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppContext, AppContextProvider, useAppContext };

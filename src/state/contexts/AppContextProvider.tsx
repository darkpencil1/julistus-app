import React, { ReactNode, useReducer, createContext } from "react";

import cartReducer, {
  initialCartState,
  CartAction,
  CartState,
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
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setProduct = (productId: IProduct["id"]) => {
    dispatch({ type: "VIEW_PRODUCT", productId });
  };

  const addItemToCart = (product: IProduct) => {
    dispatch({ type: "ADD_ITEM", product });
  };

  return (
    <AppContext.Provider value={{ state, setProduct, addItemToCart }}>
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

import { createContext, useContext, useReducer } from "react";
import ProductContextType from "../../resources/interfaces/ProductContextType";
import { Product } from "../../resources/interfaces/ProductInterface";
import productReducer, { productActionType } from "../reducers/productReducer";

const initialState = {
  product: null,
};

const ProductContext = createContext<ProductContextType>(initialState);

//Provider allows its children to subscribe to context's changes
//@ts-ignore
const ProductProvider = ({ children }) => {
  const [product, dispatch] = useReducer(productReducer, null);

  const selectProduct = (product: Product) => {
    dispatch({
      type: productActionType.VIEW_PRODUCT,
      payload: product,
    });
  };

  const value = {
    product: product,
    selectProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

//Allows us to access ProductContext values
const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };

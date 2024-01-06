import { createContext, useContext, useReducer } from "react";
import ProductContextType from "../../resources/interfaces/ProductContextType";
import IProduct from "../../resources/interfaces/ProductInterface";
import productReducer, { productActionType } from "../reducers/productReducer";

const initialState = {
  product: null,
  selectProduct: () => null,
};

const ProductContext = createContext<ProductContextType>(initialState);

type ProviderProps = {
  children: any;
};

//Provider allows its children to subscribe to context's changes
const ProductProvider = ({ children }: ProviderProps) => {
  const [product, dispatch] = useReducer(productReducer, null);

  const selectProduct = (productId: IProduct["id"]) => {
    dispatch({
      type: productActionType.VIEW_PRODUCT,
      payload: productId,
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

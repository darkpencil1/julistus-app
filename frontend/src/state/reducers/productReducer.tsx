import IProduct from "../../resources/interfaces/ProductInterface";

export type ProductState = IProduct | undefined;

export type ProductAction =
  | { type: "FETCH_PRODUCT_REQUEST"; productId: IProduct["id"] }
  | { type: "FETCH_PRODUCT_SUCCESS"; payload: IProduct }
  | { type: "FETCH_PRODUCT_FAILURE"; payload: unknown };

export const initialProductState: ProductState = undefined;

const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCT_REQUEST":
      console.log("FETCH_PRODUCT_REQUEST", action.productId);
      return undefined;
    case "FETCH_PRODUCT_SUCCESS":
      console.log("FETCH_PRODUCT_SUCCESS", action.payload);
      return action.payload;
    case "FETCH_PRODUCT_FAILURE":
      console.log("FETCH_PRODUCT_FAILURE", action);
      return undefined;
    default:
      return state;
  }
};
export default productReducer;

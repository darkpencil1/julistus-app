import { Dispatch } from "react";
import { ProductAction } from "./productReducer";
//import { Product } from "../../resources/interfaces/ProductInterface";

type ThunkAction = (dispatch: Dispatch<ProductAction>) => void;

const thunkReducer =
  (dispatch: Dispatch<ProductAction>) =>
  (action: ProductAction | ThunkAction): void => {
    if (typeof action === "function") {
      return action(dispatch);
    }

    dispatch(action);
  };

export default thunkReducer;

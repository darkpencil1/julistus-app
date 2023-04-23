import { Product } from "../../resources/interfaces/ProductInterface";

export type ProductAction = {
  type: string;
  payload: any;
};

export const productActionType = {
  VIEW_PRODUCT: "VIEW_PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
};

//Return a product user views currently
const productReducer = (
  state: Product | null,
  action: ProductAction
): Product | null => {
  const { type, payload } = action;
  switch (type) {
    case productActionType.VIEW_PRODUCT:
      return { ...payload };
    case productActionType.ADD_PRODUCT:
      return { ...payload };
    case productActionType.REMOVE_PRODUCT:
      return { ...payload };
    default:
      throw new Error(`No case for type ${type} found in productReducer.`);
  }
};

export default productReducer;

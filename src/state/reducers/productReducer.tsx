import IProduct from "../../resources/interfaces/ProductInterface";
import products from "../../resources/misc/products";

export type ProductAction = {
  type: string;
  payload: any;
};

export const productActionType = {
  VIEW_PRODUCT: "VIEW_PRODUCT",
  ADD_PRODUCT: "ADD_PRODUCT",
  REMOVE_PRODUCT: "REMOVE_PRODUCT",
};

const fetchProductById = (id: IProduct["id"]): IProduct => {
  return products.find((product: IProduct) => product.id === id) as IProduct;
};

//Return a product user views currently
const productReducer = (
  state: IProduct | null,
  action: ProductAction
): IProduct | null => {
  const { type, payload } = action;
  switch (type) {
    case productActionType.VIEW_PRODUCT:
      return fetchProductById(payload);
    case productActionType.ADD_PRODUCT:
      return { ...payload };
    case productActionType.REMOVE_PRODUCT:
      return { ...payload };
    default:
      throw new Error(`No case for type ${type} found in productReducer.`);
  }
};

export default productReducer;

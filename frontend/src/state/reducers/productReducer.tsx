import IProduct from "../../resources/interfaces/ProductInterface";
import products from "../../resources/misc/products";

export type ProductState = IProduct | undefined;

export type ProductAction = { type: "VIEW_PRODUCT"; productId: IProduct["id"] };

export const initialProductState: ProductState = undefined;

const fetchProductById = (id: IProduct["id"]): IProduct => {
  return products.find((product: IProduct) => product.id === id) as IProduct;
};

const productReducer = (
  state: ProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case "VIEW_PRODUCT":
      return fetchProductById(action.productId);
    default:
      return state;
  }
};
export default productReducer;

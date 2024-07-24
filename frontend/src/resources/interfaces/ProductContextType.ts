import IProduct from "./ProductInterface";

export default interface ProductContextType {
  product: IProduct | null;
  selectProduct: Function;
}

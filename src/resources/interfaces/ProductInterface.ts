export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

type ProductClass = "juliste" | "merkki";

interface IProduct {
  id: number;
  name: string;
  class: ProductClass;
  description: string;
  snapshot: string;
  images: string[];
  price: number;
  orientation: Orientation;
}
export default IProduct;

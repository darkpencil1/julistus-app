export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

export type ProductClass = "poster" | "tag";

interface IProduct {
  id: number;
  name: string;
  class: ProductClass;
  primer: string; //First part of the description
  description: string;
  snapshot: string; //Description displayed in shop
  images: string[];
  price: number;
  orientation: Orientation;
}
export default IProduct;

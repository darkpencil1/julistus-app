export enum Orientation {
  PORTRAIT = "portrait",
  LANDSCAPE = "landscape",
}

interface IProduct {
  id: number;
  name: string;
  description: string;
  images: string[];
  title_img: string;
  price: number;
  categories: string[];
  orientation: Orientation;
}
export default IProduct;

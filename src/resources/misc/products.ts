import wide1 from "../../resources/images/wide1.png";
import tall1 from "../../resources/images/tall1.png";
import tall2 from "../../resources/images/tall2.png";
import title_img from "../../resources/images/product_name.png";
import IProduct, { Orientation } from "../interfaces/ProductInterface";

const products: Array<IProduct> = [
  {
    id: 1,
    name: "IProduct 1",
    categories: ["Mieli", "Työ"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 10.0,
    images: [wide1, tall2, tall1, wide1, wide1, tall2, tall1, wide1],
    title_img: title_img,
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 2,
    name: "IProduct 2",
    categories: ["Mieli", "Harjoittelu"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 12.0,
    images: [tall2, wide1, tall1, wide1],
    title_img: title_img,
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 3,
    name: "IProduct 3",
    categories: ["Työ", "Harjoittelu"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 15.0,
    images: [tall1, wide1, wide1, tall2],
    title_img: title_img,
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 4,
    name: "IProduct 4",
    categories: ["Mieli", "Inspiraatio"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 20.0,
    images: [wide1, wide1, tall1, tall2],
    title_img: title_img,
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 5,
    name: "IProduct 1",
    categories: ["Mieli", "Työ"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 10.0,
    images: [wide1, wide1, tall1, tall2],
    title_img: title_img,
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 6,
    name: "IProduct 2",
    categories: ["Mieli", "Harjoittelu"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 12.0,
    images: [wide1, tall2, tall1, wide1],
    title_img: title_img,
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 7,
    name: "IProduct 3",
    categories: ["Työ", "Harjoittelu"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 15.0,
    images: [tall1, wide1, wide1, tall2],
    title_img: title_img,
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 8,
    name: "IProduct 4",
    categories: ["Mieli", "Inspiraatio"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 20.0,
    images: [wide1, wide1, tall1, tall2],
    title_img: title_img,
    orientation: Orientation.LANDSCAPE,
  },
  // Add more products here if needed
];

export default products;

import { AddToCartOption } from "../../components/productPageComponents/AddToCartPanel";

const data = [
  {
    id: 0,
    name: "A4",
    specs: "30 X 21 cm",
    price: 25,
  },
  {
    id: 1,
    name: "A3",
    specs: "42 X 30 cm",
    price: 35,
  },
  {
    id: 2,
    name: "A2",
    specs: "59 X 42 cm",
    price: 40,
  },
];

const posterSizes: AddToCartOption = {
  name: "Koko",
  id: "SIZE",
  data: data,
  primary: true,
};
export default posterSizes;

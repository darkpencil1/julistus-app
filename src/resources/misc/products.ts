import inventor from "../../resources/images/inventor-1.webp";
import bard from "../../resources/images/bard-1.webp";
import bladesinger from "../../resources/images/bladesinger-1.webp";
import tasha from "../../resources/images/tasha-1.webp";

const products = [
  {
    id: 1,
    name: "Product 1",
    categories: ["Mieli", "Työ"],
    description:
      "Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1",
    price: 10.0,
    image: [inventor, bard, bladesinger, tasha],
  },
  {
    id: 2,
    name: "Product 2",
    categories: ["Mieli", "Harjoittelu"],
    description:
      "Product 2, Product 2, Product 2Product 2Product 2Product 2Product 2Product 2",
    price: 12.0,
    image: [bard, inventor, bladesinger, tasha],
  },
  {
    id: 3,
    name: "Product 3",
    categories: ["Työ", "Harjoittelu"],
    description:
      "Product 3, Product 3, Product 3Product 3Product 3Product 3Product 3Product 3",
    price: 15.0,
    image: [bladesinger, inventor, tasha, bard],
  },
  {
    id: 4,
    name: "Product 4",
    categories: ["Mieli", "Inspiraatio"],
    description:
      "Product 4, Product 4, Product 4Product 4Product 4Product 4Product 4Product 4",
    price: 20.0,
    image: [inventor, tasha, bladesinger, bard],
  },
  {
    id: 5,
    name: "Product 1",
    categories: ["Mieli", "Työ"],
    description:
      "Product 1Product 1Product 1Product 1Product 1Product 1Product 1Product 1",
    price: 10.0,
    image: [tasha, inventor, bladesinger, bard],
  },
  {
    id: 6,
    name: "Product 2",
    categories: ["Mieli", "Harjoittelu"],
    description:
      "Product 2, Product 2, Product 2Product 2Product 2Product 2Product 2Product 2",
    price: 12.0,
    image: [inventor, bard, bladesinger, tasha],
  },
  {
    id: 7,
    name: "Product 3",
    categories: ["Työ", "Harjoittelu"],
    description:
      "Product 3, Product 3, Product 3Product 3Product 3Product 3Product 3Product 3",
    price: 15.0,
    image: [bladesinger, inventor, tasha, bard],
  },
  {
    id: 8,
    name: "Product 4",
    categories: ["Mieli", "Inspiraatio"],
    description:
      "Product 4, Product 4, Product 4Product 4Product 4Product 4Product 4Product 4",
    price: 20.0,
    image: [tasha, inventor, bladesinger, bard],
  },
  // Add more products here if needed
];

export default products;

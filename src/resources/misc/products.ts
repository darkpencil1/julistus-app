import wide1 from "../../resources/images/wide1.png";
import tall1 from "../../resources/images/tall1.png";
import tall2 from "../../resources/images/tall2.png";
import IProduct, { Orientation } from "../interfaces/ProductInterface";

const products: Array<IProduct> = [
  {
    id: 1,
    name: "Tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 10.0,
    images: [wide1, tall2, tall1, wide1, wide1, tall2, tall1, wide1],
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 2,
    name: "Pidempi tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 12.0,
    images: [tall2, wide1, tall1, wide1],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 3,
    name: "Todella pitkä tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.\n 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 15.0,
    images: [tall1, wide1, wide1, tall2],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 4,
    name: "Pidempi tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 20.0,
    images: [wide1, wide1, tall1, tall2],
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 5,
    name: "Pidempi tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 10.0,
    images: [wide1, wide1, tall1, tall2],
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 6,
    name: "Todella pitkä tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 12.0,
    images: [wide1, tall2, tall1, wide1],
    orientation: Orientation.LANDSCAPE,
  },
  {
    id: 7,
    name: "Pidempi tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 15.0,
    images: [tall1, wide1, wide1, tall2],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 8,
    name: "Tuotteen nimi",
    class: "poster",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium congue venenatis.",
    price: 20.0,
    images: [wide1, wide1, tall1, tall2],
    orientation: Orientation.LANDSCAPE,
  },
];

export default products;

import tag from "../../resources/images/skill-tag-big.png";
import tall1 from "../../resources/images/1_Taitoperhonen_sm.jpg";
import IProduct, { Orientation } from "../interfaces/ProductInterface";

const products: Array<IProduct> = [
  {
    id: 1,
    name: "Pitele 1. taitoperhonen",
    productType: "poster",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 10.0,
    images: [tall1, tag, tall1, tag, tag, tall1, tag],
    orientation: Orientation.PORTRAIT,
  },
  {
    id: 3,
    name: "Alkuun päässyt perhostenkerääjä",
    productType: "tag",
    primer:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
    snapshot:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
    description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
    price: 20.0,
    images: [tag, tag, tall1],
    orientation: Orientation.LANDSCAPE,
  },
];

export default products;

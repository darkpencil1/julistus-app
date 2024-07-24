"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProductInterface_1 = require("@shared/types/ProductInterface");
const products = [
    {
        id: 1,
        name: "Taidonjahti",
        productType: "poster",
        primer: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
        snapshot: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
        description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
        price: 20.0,
        images: ["./images/Taidonjahti_thumbnail.jpg"],
        orientation: ProductInterface_1.Orientation.PORTRAIT,
    },
    {
        id: 3,
        name: "Vaivojen koulu",
        productType: "poster",
        primer: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
        snapshot: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
        description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
        price: 20.0,
        images: ["./images/vaivojen-koulu_thumbnail.jpg"],
        orientation: ProductInterface_1.Orientation.PORTRAIT,
    },
    {
        id: 2,
        name: "Taitaa vähän taitaa",
        productType: "tag",
        primer: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
        snapshot: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
        description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
        price: 12.0,
        images: ["./images/taidonjahti-merkki-teksti.png"],
        orientation: ProductInterface_1.Orientation.LANDSCAPE,
    },
    {
        id: 4,
        name: "Kastettu, nokittu, opittu",
        productType: "tag",
        primer: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit. Phasellus pretium congue venenatis.",
        snapshot: "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit",
        description: `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. 
      Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`,
        price: 12.0,
        images: ["./images/vaivojen-koulu-merkki-teksti.png"],
        orientation: ProductInterface_1.Orientation.LANDSCAPE,
    },
];
exports.default = products;

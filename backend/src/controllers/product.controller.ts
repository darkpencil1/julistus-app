import path from "path";
import { Request, Response } from "express";
import products from "../resources/products";
import IProduct from "@shared/types/ProductInterface";

export const getAllProducts = (_: Request, res: Response) => {
  try {
    res.json(products);
  } catch (e) {
    res.json(e);
  }
};

export const getProductWithId = (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    console.log("[getProductWithId] product requested with id: ", id);
    const product = products.find(
      (product: IProduct) => product.id.toString() === id
    ) as IProduct;
    console.log("[getProductWithId] product: ", product);
    if (product) res.json(product);
    else res.send("No product found with provided id.");
  } catch (e) {
    res.json(e);
  }
};

export const getImage = (req: Request, res: Response) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(
    __dirname,
    "..",
    "..",
    "src",
    "resources",
    "images",
    imageName
  );
  console.log("imagePath", imagePath);
  //const imagePath = path.join(__dirname, "public", "images", imageName);

  res.sendFile(imagePath, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    }
  });
};

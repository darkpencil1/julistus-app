import path from "path";
import { Request, Response } from "express";
import products from "../resources/products";

export const getAllProducts = (_: Request, res: Response) => {
  console.log("[getAllProducts] products requested.");
  try {
    res.json(products);
  } catch (e) {
    res.json(e);
  }
};

export const getImage = (req: Request, res: Response) => {
  const imageName = req.params.imageName;
  console.log("[getImage] img requested with name", imageName);
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

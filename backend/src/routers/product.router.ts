import { Router } from "express";
import {
  getAllProducts,
  getImage,
  getProductWithId,
} from "../controllers/product.controller";

const router = Router();

router.get("/", getAllProducts);
router.get("/:id", getProductWithId);
router.get("/image/:imageName", getImage);

export default router;

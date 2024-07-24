import { Router } from "express";
import { getAllProducts, getImage } from "../controllers/product.controller";

const router = Router();

router.get("/", getAllProducts);
router.get("/image/:imageName", getImage);
router.get("/image", getImage);

export default router;

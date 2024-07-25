import { Router } from "express";
import { getAllQuests } from "../controllers/quest.controller";

const router = Router();

router.get("/", getAllQuests);

export default router;

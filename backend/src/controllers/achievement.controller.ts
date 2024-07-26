import { Request, Response } from "express";
import achievements from "../resources/achievements";

export const getAllAchievements = (_: Request, res: Response) => {
  try {
    res.json(achievements);
  } catch (e) {
    res.json(e);
  }
};

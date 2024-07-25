import { Request, Response } from "express";
import quests from "../resources/quests";

export const getAllQuests = (_: Request, res: Response) => {
  try {
    res.json(quests);
  } catch (e) {
    res.json(e);
  }
};

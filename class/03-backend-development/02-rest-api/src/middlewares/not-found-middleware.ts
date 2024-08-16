import { Request, Response } from "express";

export function notFoundMiddleware(req: Request, res: Response) {
  res.status(404).json({ message: "The route you search for does not exist" });
}

import { Response } from "express";

export function catchHandle(error: unknown, res: Response) {
  let statusCode;
  let message;

  if (error instanceof Error) {
    statusCode = (error as any).statusCode || 500;
    message =
      `Encountered error because: ${error.message}` ||
      "Unknown error happened. Good luck!";
  }

  res.status(statusCode).json({ message });
}

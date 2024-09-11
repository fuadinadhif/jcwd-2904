import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllUser(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();

    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return res.status(500).json({ message: error.message });
    }
  }
}

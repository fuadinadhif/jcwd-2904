import { Request, Response } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get all of our existing users
export async function getAllUser(req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error(error);
  }
}

// Get only single user by ther ID
export async function getSingleUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });

    res.status(200).json({ data: user });
  } catch (error) {
    console.error(error);
  }
}

// Update existing user
export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { email, name } = req.body;

    await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
      },
    });

    res.status(200).json({ message: "User updated" });
  } catch (error) {
    console.error(error);
  }
}

// Delete specific user
export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
  }
}

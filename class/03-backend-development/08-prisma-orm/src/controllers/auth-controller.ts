import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function register(req: Request, res: Response) {
  try {
    const { name, email, password } = req.body;
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser)
      res.status(409).json({ message: "Email has already been used" });

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);

    const authorRole = await prisma.role.findUnique({
      where: { id: 2, position: "author" },
    });

    const newUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword,
        role: {
          connect: { id: authorRole!.id },
        },
      },
    });

    res.status(201).json({ message: "User created", data: newUser });
  } catch (error) {
    console.error(error);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) res.status(404).json({ message: "Email not found" });

    const isValidPassword = await compare(password, user?.password!);

    if (!isValidPassword) res.status(401).json({ message: "Invalid password" });

    const jwtPayload = { email, role: user?.roleId };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login success", token });
  } catch (error) {
    console.error(error);
  }
}

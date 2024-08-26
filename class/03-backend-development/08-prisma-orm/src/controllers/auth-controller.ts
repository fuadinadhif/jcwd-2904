import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { transporter } from "../config/nodemailer";

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
        emailConfirmed: false,
      },
    });

    // Generate confirmation token
    const token = crypto.randomBytes(20).toString("hex");
    const confirmationLink = `http://localhost:${process.env.PORT}/api/v1/auth/confirm-email?token=${token}`;

    await prisma.token.create({
      data: {
        token,
        expiresAt: new Date(Date.now() + 60 * 60 * 1000),
        userId: newUser.id,
      },
    });

    await transporter.sendMail({
      from: `JCWD-2904 <no-reply@jcwd.com>`,
      to: email,
      subject: "Email Confirmation",
      text: `Please confirm your email by clicking on the following link: ${confirmationLink}`,
      html: `<p>Please confirm your email by clicking on the following link: <a href="${confirmationLink}">Confirmation Link</a></p>`,
    });

    res.status(201).json({ message: "Please confirmed your email" });
  } catch (error) {
    console.error(error);
  }
}

export async function confirmEmail(req: Request, res: Response) {
  try {
    const { token } = req.query;

    if (!token) return res.status(400).json({ message: "Token is required" });

    const tokenRecord = await prisma.token.findUnique({
      where: { token: token.toString() },
    });

    if (!tokenRecord || tokenRecord.used || tokenRecord.expiresAt < new Date())
      return res.status(400).json({ message: "Invalid or expired token" });

    // Mark the token as used
    await prisma.token.update({
      where: { id: tokenRecord.id },
      data: { used: true },
    });

    // Mark the email as confirmed
    await prisma.user.update({
      where: { id: tokenRecord.userId },
      data: { emailConfirmed: true },
    });

    res.status(200).json({ message: "Email confirmed successfully" });
  } catch (error) {
    console.error(error);
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Required field is missing" });

    const user = await prisma.user.findUnique({
      where: {
        email,
        emailConfirmed: true,
      },
    });

    if (!user || !user.emailConfirmed)
      res.status(404).json({ message: "Email not confirmed or not found" });

    const isValidPassword = await compare(password, user?.password!);

    if (!isValidPassword) res.status(401).json({ message: "Invalid password" });

    const jwtPayload = { email, roleId: user?.roleId };
    const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY as string, {
      expiresIn: "1h",
    });

    res
      .cookie("token", token, { httpOnly: true, sameSite: true })
      .status(200)
      .json({ message: "Login success" });
  } catch (error) {
    console.error(error);
  }
}

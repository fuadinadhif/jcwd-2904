import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// Authentication
export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.cookies.token;

    if (!token) res.status(401).json({ message: "No token provided" });

    const verifiedUser = jwt.verify(
      token!,
      process.env.JWT_SECRET_KEY as string
    );

    if (!verifiedUser) res.status(401).json({ message: "Invalid token" });

    (req as any).user = verifiedUser;

    next();
  } catch (error) {
    console.error(error);
  }
}

// Admin authorization
export async function adminGuard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if ((req as any).user.roleId !== 1)
      res.status(401).json({ message: "You are not an admin" });

    next();
  } catch (error) {
    console.error(error);
  }
}

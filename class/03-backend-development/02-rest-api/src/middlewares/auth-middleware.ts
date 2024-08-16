import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function basicAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Get authorization property from request headers
  const auth = req.headers["authorization"];

  console.log(auth);

  if (!auth) {
    res.set("WWW-Authenticate", "Basic");
    res.status(401).json({ message: "Authentication required" });
  }

  const credentials = Buffer.from(auth!.split(" ")[1], "base64").toString(
    "ascii"
  );

  console.log(credentials);

  const [username, password] = credentials.split(":");

  const validUsername = "user";
  const validPassword = "pass";

  if (username === validUsername && password === validPassword) {
    next();
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}

export function bearerAuthMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const auth = req.headers.authorization;
  const token = auth && auth.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "No token present",
    });
  }

  jwt.verify(
    token!,
    "superDuperSafeAndSecretKeyNoOneCantEverGuess",
    (error, user) => {
      if (error) res.status(403).json({ message: "Invalid token" });

      req.user = user;
      next();
    }
  );
}

import { Response, Request } from "express";
import fs from "fs/promises";

export async function getAllUser(req: Request, res: Response) {
  res.status(200).json({ name: "King Charles II" });
}

export async function createUser(req: Request, res: Response) {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      res.status(400).json({ message: "required fields is missing" });
    }
    const JSONData = await fs.readFile("./data.json", "utf-8");
    const data = JSON.parse(JSONData);

    data.push({ name, email, id: new Date().getTime() });

    fs.writeFile("./data.json", JSON.stringify(data, null, 2));

    return res.status(201).json({ message: "success register new user", data });
  } catch (error) {
    console.error(error);
  }
}

export async function updateUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const JSONData = await fs.readFile("./data.json", "utf-8");
    const userData = JSON.parse(JSONData);
    const updateIndex = userData.findIndex(
      (user: { id: number }) => user.id === Number(id)
    );
    const userTarget = userData[updateIndex];

    if (!userTarget) {
      res.status(404).json({ message: "User not found" });
    }

    userData[updateIndex] = { ...userTarget, ...req.body };

    await fs.writeFile("./data.json", JSON.stringify(userData, null, 2));

    res.status(200).json({ message: "User updated", data: userTarget });
  } catch (error) {
    console.error(error);
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const { id } = req.params;

    const JSONData = await fs.readFile("./data.json", "utf-8");
    const userData = JSON.parse(JSONData);
    const deleteIndex = userData.findIndex(
      (user: { id: number }) => user.id === Number(id)
    );

    if (deleteIndex === -1) {
      res.status(404).json({ message: "User not found" });
    }

    userData.splice(deleteIndex, 1);

    await fs.writeFile("./data.json", JSON.stringify(userData, null, 2));

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    console.error(error);
  }
}

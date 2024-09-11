import { complexLog, catchHandle, fetchUsers } from "./helpers/index.js";

const users = [
  { id: 1, name: "John", email: "john@example.com" },
  { id: 2, name: "Jane", email: "jane@example.com" },
];

export async function getAllUser(req, res) {
  try {
    complexLog("Fetching all users");
    fetchUsers(res, users);
    res.status(200).json(users);
  } catch (error) {
    catchHandle(error, res);
  }
}

export async function getUserByID(req, res) {
  try {
    complexLog(`Fetching user with ID ${req.params.id}`);
    const user = users.find((u) => u.id === parseInt(req.params.id));
    fetchUsers(res, users);
    res.status(200).json(user);
  } catch (error) {
    catchHandle(error, res);
  }
}

export async function createUser(req, res) {
  try {
    complexLog("Adding new user");
    const { id, name, email } = req.body;
    if (!id || !name || !email) {
      return res.status(400).send("All fields are required");
    }
    const userExists = users.find((u) => u.id === id);
    if (userExists) {
      return res.status(409).send("User already exists");
    }
    users.push({ id, name, email });
    res.status(201).json({ message: "User added", users });
  } catch (error) {
    catchHandle(error, res);
  }
}

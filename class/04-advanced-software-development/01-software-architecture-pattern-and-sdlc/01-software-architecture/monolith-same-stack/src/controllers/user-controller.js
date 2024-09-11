import User from "../models/user-model.js";

const user = new User();

export function getAllUser(req, res) {
  const users = user.getAllUser();
  return res.render("users", { title: "Users List", users });
}

export function getHomePage(req, res) {
  return res.render("index", { title: "Homepage" });
}

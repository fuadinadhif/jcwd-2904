// Fetch handler
export const fetchUsers = (res, users = null) => {
  if (!users && users.length === 0) {
    return res.status(404).send("Nothing here");
  }

  return res.status(200).json(users);
};

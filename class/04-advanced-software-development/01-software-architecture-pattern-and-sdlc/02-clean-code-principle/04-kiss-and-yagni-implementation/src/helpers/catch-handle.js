// Catch handle
export const catchHandle = (error, res) => {
  if (error instanceof Error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

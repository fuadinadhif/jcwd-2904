import fs from "fs/promises";

export async function readRecords() {
  const result = await fs.readFile("./data.json", "utf-8");
  return result;
}

export async function writeRecords(data: any) {
  await fs.writeFile("./data.json", JSON.stringify(data, null, 2));
}

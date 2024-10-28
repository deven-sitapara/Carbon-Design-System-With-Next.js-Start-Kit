// pages/api/data.js

import { promises as fs } from "fs";

export default async function handler(req, res) {
  try {
    const file = await fs.readFile(process.cwd() + "/src/data/file.json", "utf8");
    const data = JSON.parse(file);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to load data" });
  }
}
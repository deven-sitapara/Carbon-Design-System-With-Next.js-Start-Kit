// lib/fetchFileData.ts
import path from "path";
 import { promises as fs } from 'fs';

export async function fetchFileData() {
  const filePath = path.join(process.cwd(), "src/data/file.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

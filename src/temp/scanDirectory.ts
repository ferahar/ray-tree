import * as path from "path";
import * as fs from "fs";

const scanDirectory = (dir: string) => {
  let files: string[] = []
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const entryPath = path.join(dir, entry);
    const stats = fs.statSync(entryPath);

    if (stats.isDirectory()) {
      const subFiles = scanDirectory(entryPath);
      files = [...files, ...subFiles];
    } else if (stats.isFile() && entryPath.endsWith('.ts')) {
      files.push(entryPath);
    }
  }
  
  return files;
};

export {
    scanDirectory
}

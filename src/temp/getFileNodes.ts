import * as path from "path";
import * as fs from "fs";
import { NodeData } from "./types";

const getFileNodes = (dir: string) => {
    let nodes: NodeData[] = [];
    const entries = fs.readdirSync(dir);

    for (const entry of entries) {
        const entryPath = path.join(dir, entry);
        const stats = fs.statSync(entryPath);

        if (stats.isDirectory()) {
            const subFiles = getFileNodes(entryPath);
            nodes = [...nodes, ...subFiles];
        } else if (stats.isFile() && entryPath.endsWith('.ts')) {
            nodes.push({
                id: entryPath,
                path: entryPath,
                x: 0,
                y: 0,
                size: 30
            });
        }
    }
  
    return nodes;
};



export {
    getFileNodes
}

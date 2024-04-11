import * as path from "path";
import * as fs from "fs";
import * as readline from "readline";
import { NodeConnector } from "./types";


async function scanFile(file: string) {
    const fileStream = fs.createReadStream(
        file,
        { encoding: "utf-8" }
      );

      const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
      });

      const dependency: NodeConnector[] = [];
    
      for await (const line of rl) {
        if (line.includes('import')) {
            const matchRsults = line.match(/(\"|\')(.*)(\"|\')/);
            if (matchRsults && matchRsults[2]) {
                const name = matchRsults[2];
                const source = path.dirname(file);
                const dependencyFile = path.join(source, name);
                dependency.push({
                    source: file,
                    target: dependencyFile
                });
            }
        }
        // console.log(`> ${line}`);
      }

      return dependency;
}

export {
    scanFile
}
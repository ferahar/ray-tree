// import { scanDirectory } from "./scanDirectory";
// import { createDependencyTree } from "./createDependencyTree";
import { scanFile } from "./scanFile";
import { NodeConnector, NodeData } from "./types";
import { getFileNodes } from "./getFileNodes";

const DIR_ROOT = 'project-test';

console.log('-= start =-');
// const files = scanDirectory(DIR_ROOT);
const files = getFileNodes(DIR_ROOT);
console.log('files: ');
console.log(files);

async function getEdges(files: NodeData[]) {
    const edges: NodeConnector[] = [];

    for await (const file of files) {
        await scanFile(file.path).then(response => {
            response.forEach(element => {
                edges.push(element)
            });
        });
    }
    return edges;
}

getEdges(files).then(dependes => {
        console.log('file dependency:');
        console.log(dependes);
})






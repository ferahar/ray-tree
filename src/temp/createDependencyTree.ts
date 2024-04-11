import  * as ts from "typescript";


const cutTail = (str: string, separator: string) => {
    const index = str.indexOf(separator);
    return str.slice(index)
}

const createDependencyTree = (file: string, root: string) => {
    const program = ts.createProgram([file], {});
    return program.getSourceFiles()
    .filter(sourceFile => !sourceFile.fileName.includes('node_modules'))
    .map(sourceFile => cutTail(sourceFile.fileName, root));
};

export {
    createDependencyTree
}
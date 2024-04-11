// import {TreeDep} from "./mockDataTree";

// export type Link = {
//     source: string,
//     target: string | number,
// }
//
// export type Node = {
//     id: string | number,
//     x: number,
//     y: number,
//     name: string,
//     category: 0
// }

const STEP = 40;

export const getDataTree = dep => {
    const nodes = [];
    const links = [];
    Object.keys(dep).map(name => {
        nodes.push( {
            id: name,
            name: name,
            x: STEP * 2 * name.split('/').length,
            y: STEP * nodes.length,
            symbolSize: 20,
            category: 0,
        })
        dep[name]?.filter(link => link.id !== null).forEach(link => links.push({
            source: link.issuer,
            target: link.id,
        }))
    });

    return {nodes, links}
}
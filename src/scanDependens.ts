import { parseDependencyTree, parseCircular, prettyCircular, Dependency } from 'dpdm';

// const PROJECT_TEST_PATH = join(process.cwd(), '/project-test/index');

export function scan() {
    parseDependencyTree('project-test/index.ts', {
      }).then((tree) => {
        console.log("tree = ", tree);
        const circulars = parseCircular(tree);
        console.log('circulars = ', prettyCircular(circulars));
      });
}
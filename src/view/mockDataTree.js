// import { Dependency } from "dpdm";
// import {DependencyKind} from "dpdm/src/consts";
//
// type Dep = Omit<Dependency, "kind"> & {
//     kind: string;
// };
//
// export type TreeDep = Record<string, Dep[] | null>;


export const tree =  {
        'project-test/index.ts': [
            {
                issuer: 'project-test/index.ts',
                request: './main',
                kind: 'StaticImport',
                id: 'project-test/main.ts'
            }
        ],
        'project-test/main.ts': [
            {
                issuer: 'project-test/main.ts',
                request: './core',
                kind: 'StaticImport',
                id: 'project-test/core/index.ts'
            },
            {
                issuer: 'project-test/main.ts',
                request: './core/example-circular',
                kind: 'StaticImport',
                id: 'project-test/core/example-circular/index.ts'
            }
        ],
        'project-test/core/index.ts': [
            {
                issuer: 'project-test/core/index.ts',
                request: './core',
                kind: 'StaticExport',
                id: 'project-test/core/core.ts'
            }
        ],
        'project-test/core/example-circular/index.ts': [
            {
                issuer: 'project-test/core/example-circular/index.ts',
                request: './exampleCircularSecond',
                kind: 'StaticExport',
                id: 'project-test/core/example-circular/exampleCircularSecond.ts'
            },
            {
                issuer: 'project-test/core/example-circular/index.ts',
                request: './exampleCircularOne',
                kind: 'StaticExport',
                id: 'project-test/core/example-circular/exampleCircularOne.ts'
            }
        ],
        'project-test/core/core.ts': [
            {
                issuer: 'project-test/core/core.ts',
                request: './store',
                kind: 'StaticImport',
                id: 'project-test/core/store/index.ts'
            },
            {
                issuer: 'project-test/core/core.ts',
                request: './utils',
                kind: 'StaticImport',
                id: 'project-test/core/utils/index.ts'
            }
        ],
        'project-test/core/example-circular/exampleCircularSecond.ts': [
            {
                issuer: 'project-test/core/example-circular/exampleCircularSecond.ts',
                request: './exampleCircularOne',
                kind: 'StaticImport',
                id: 'project-test/core/example-circular/exampleCircularOne.ts'
            }
        ],
        'project-test/core/example-circular/exampleCircularOne.ts': [
            {
                issuer: 'project-test/core/example-circular/exampleCircularOne.ts',
                request: './exampleCircularSecond',
                kind: 'StaticImport',
                id: 'project-test/core/example-circular/exampleCircularSecond.ts'
            }
        ],
        'project-test/core/store/index.ts': [
            {
                issuer: 'project-test/core/store/index.ts',
                request: './Store',
                kind: 'StaticImport',
                id: 'project-test/core/store/Store.ts'
            }
        ],
        'project-test/core/utils/index.ts': [
            {
                issuer: 'project-test/core/utils/index.ts',
                request: './cloneObject',
                kind: 'StaticExport',
                id: 'project-test/core/utils/cloneObject.ts'
            },
            {
                issuer: 'project-test/core/utils/index.ts',
                request: './compareFile',
                kind: 'StaticExport',
                id: 'project-test/core/utils/compareFile.ts'
            }
        ],
        'project-test/core/store/Store.ts': [],
        'project-test/core/utils/cloneObject.ts': [],
        'project-test/core/utils/compareFile.ts': []
    }
;

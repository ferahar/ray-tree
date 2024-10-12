const fs = require('fs-extra');
const path = require('path');
const acorn = require('acorn');
const walk = require('acorn-walk');

// Функция для сканирования директорий
function scanDir(directory) {
    let files = [];
    const items = fs.readdirSync(directory);
    items.forEach((item) => {
        const fullPath = path.join(directory, item);
        if (fs.statSync(fullPath).isDirectory()) {
            files = files.concat(scanDir(fullPath));
        } else if (fullPath.endsWith('.js') || fullPath.endsWith('.ts')) {
            files.push(fullPath);
        }
    });
    return files;
}

// Функция для извлечения импортов из файла
function getImports(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const ast = acorn.parse(fileContent, { sourceType: 'module', ecmaVersion: 2020 });

    const imports = [];
    walk.simple(ast, {
        ImportDeclaration(node) {
            imports.push(node.source.value); // Получаем путь импорта
        }
    });
    return imports;
}

// Построение древовидной структуры
function buildImportTree(baseDir) {
    const allFiles = scanDir(baseDir);
    const tree = {};

    allFiles.forEach((file) => {
        const relativePath = path.relative(baseDir, file);
        const imports = getImports(file);

        let currentNode = tree;
        const parts = relativePath.split(path.sep);
        
        // Строим путь к файлу в дереве
        parts.forEach((part, index) => {
            if (!currentNode[part]) {
                currentNode[part] = index === parts.length - 1 ? { imports: [] } : {};
            }
            currentNode = currentNode[part];
        });

        // Добавляем импортированные модули к последнему узлу
        currentNode.imports = imports;
    });

    return tree;
}

// Вывод структуры
// const projectDir = path.join(__dirname, 'project-test'); // Укажите путь к вашему проекту
const projectDir = 'project-test/core/utils'; // Укажите путь к вашему проекту
console.log('projectDir = ', projectDir);
const importTree = buildImportTree(projectDir);
console.log(JSON.stringify(importTree, null, 2));
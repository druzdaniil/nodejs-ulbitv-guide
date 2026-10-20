import path from "node:path";

const secondPart = 'second';
console.log(path.join('first', secondPart));

// __dirname та __filename лише в CommonJS
// console.log(path.join(__dirname, secondPart));
// console.log(path.join(__dirname, '..'));
// console.log(path.join(__filename, secondPart));

console.log(path.join(import.meta.dirname, secondPart));
console.log(path.join(import.meta.dirname, '../..'));
console.log(import.meta.filename);

console.log(path.resolve());
console.log(path.resolve(secondPart));

const currentFileName = import.meta.filename;
const currentDirectoryName = import.meta.dirname;
console.log(path.parse(currentDirectoryName));
console.log(path.parse(currentFileName));

console.log(path.sep);
console.log(path.isAbsolute(currentFileName));
console.log(path.basename(currentFileName));
console.log(path.extname(currentFileName));

const siteUrl = 'http://localhost:8000/users?id=1234';

const url = new URL(siteUrl);

console.log(url);
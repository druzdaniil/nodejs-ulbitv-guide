import path from "node:path";
import fs from "fs";
import fsPromises from "fs/promises";
import util from 'util';

fs.mkdirSync(path.resolve(import.meta.dirname, '..', 'dir-sync', 'dir-sync-n2'), { recursive: true });
fs.mkdir(
	path.resolve(import.meta.dirname, '..', 'dir-async', 'dir-async-n2'), 
	{ recursive: true },
	(err) => {
		if (err) {
			throw err;
		} else {
			console.log('Папка створена');
		}
	}
);

// fs.rmdir(path.resolve(import.meta.dirname, '../dir-async', 'dir-async-n2'), (err) => {
// 	if (err) {
// 		throw err;
// 	}
// });

// fs.writeFile(path.resolve(import.meta.dirname, 'files', 'test.txt'), 'dhskfhkdshf', (err) => {
// 	if (err) {
// 		throw err;
// 	} else {
// 		console.log('Інформація додана у файл');
// 	}

// 	fs.appendFile(path.resolve(import.meta.dirname, 'files', 'test.txt'), ' | skdhfkshdkjfh', err => {
// 	if (err) {
// 		throw err;
// 	} else {
// 		console.log('Інформація додана у файл');
// 	}
// 	})
// });

// Ручний перезапис колбеків на проміси
// async function writeFileAsync(filePath, data) {
// 	return new Promise((res, rej) => {
// 		fs.writeFile(path.resolve(filePath), data, err => {
// 			if (err) {
// 				rej(err);
// 			} else {
// 				res('Дані записалися, все гуд')
// 			}
// 		})
// 	})
// }

// Промісифікація вже існуючого методу
// const writeFileAsync = util.promisify(fs.writeFile);

const pathFile = path.resolve(import.meta.dirname, 'files', 'test.txt')
// writeFileAsync(pathFile, 'prooooooooooooooomises');

try {
	await fsPromises.writeFile(pathFile, 'abc', 'utf-8');
	console.log('Дані успішно перезаписані');
} catch (err) {
	throw err;
}

// -----------------------------

const text = process.env.TEXT || 'Текст за замовчуванням';


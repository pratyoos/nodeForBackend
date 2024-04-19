// sample code to read a file synchronously using the fs.readFileSync() method
import fs from 'fs';
const data = fs.readFileSync('sample.txt', 'utf8');
// print contents of the file "sample.txt" to console
console.log(data);

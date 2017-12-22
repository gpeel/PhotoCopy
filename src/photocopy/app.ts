// import * as fs from 'fs';
import {Folder} from './tools/folder';

console.log('app');
const folderSource = './test/source/';
const folderTarget = './test/target/';
//
// Folder.readFolder(folderSource);
//
// const fileSource = folderSource + 's1.txt';
// const fileTarget = folderTarget + 's1.txt';
//
// const logErr = (err) => console.log(err);
// Folder.copyFile(fileSource, fileTarget, logErr);

Folder.copyFolder(folderSource, folderTarget, console.log);

// import * as fs from 'fs';

import {Photocopy} from './tools/photocopy';

console.log('app');
const folderSource = './test/source/';
// const folderTarget = './test/target/';
const folderTarget = 'C:/me/js/Typescript/tp/PhotoCopy/test/target';
//
// Folder.readFolderFileNames(folderSource);
//
const fileSource = folderSource + 's1.txt';
const fileTarget = folderTarget + 's1.txt';

// test create folder
// =================
// const folderTarget = 'C:/me/js/Typescript/tp/PhotoCopy/test/target';
// Folder.createFolderIfNotExist(folderTarget);
//
// const logErr = (err) => console.log(err);
// File.copyFile();
// Folder.copyFile(fileSource, fileTarget, logErr);

// Folder.copyFolderFiles(folderSource, folderTarget, console.log);

// TEST OK
// const sourceFileNames = 'C:/me/js/Typescript/w_save/test/';
// const source = 'C:/me/js/Typescript/tp/PhotoCopy/test/source/';
// const target = 'C:/me/js/Typescript/tp/PhotoCopy/test/target/';
// const errCallback = console.log;

// REAL JPG to RAW from SONY SD
// ===============================
// const sourceFileNames = 'C:/Users/gauth/Pictures/Perso-n2.2/Madrid-18/super-BEST-jpg';
// const source = 'D:/DCIM/100MSDCF/';
// const target = 'C:/Users/gauth/Pictures/Perso-n2.2/Madrid-18/super-BEST-RAW/';
// const errCallback = console.log;
//
// function filterNamesExtension_changed_txt(filename: string): string {
//     const r = filename.substr(0, filename.lastIndexOf('.')) + '.ARW';
//     console.log('changed fileName :' + r);
//     return r;
// }
//
// Photocopy.photocopyFiles(sourceFileNames, source, target, filterNamesExtension_changed_txt, errCallback);

// REAL 2 : SONY AGAIN D:\DCIM\101MSDCF
// so ARW
// const sourceFileNames = 'C:/Users/gauth/Pictures/Perso-n2.2/Madrid-18/super-BEST-jpg';
// const source = 'D:/DCIM/100MSDCF/';
// const target = 'C:/Users/gauth/Pictures/Perso-n2.2/Madrid-18/super-BEST-RAW/';
// const errCallback = console.log;
//
// function filterNamesExtension_changed_txt(filename: string): string {
//     const r = filename.substr(0, filename.lastIndexOf('.')) + '.ARW';
//     console.log('changed fileName :' + r);
//     return r;
// }
//
// Photocopy.photocopyFiles(sourceFileNames, source, target, filterNamesExtension_changed_txt, errCallback);

// REAL 3 : SONY AGAIN disk to disk
// so ARW
const sourceFileNames = 'C:/Users/gauth/Pictures/Perso-REFRESH/Ceillac-50-ans-Steph/Best-6500/';
const source = 'C:/Users/gauth/Pictures/Perso-REFRESH/Ceillac-50-ans-Steph/Sony-6500/';
const target = 'C:/Users/gauth/Pictures/Perso-REFRESH/Ceillac-50-ans-Steph/Best-6500-RAW/';
const errCallback = console.log;

function filterNamesExtension_changed_txt(filename: string): string {
    const r = filename.substr(0, filename.lastIndexOf('.')) + '.ARW';
    console.log('changed fileName :' + r);
    return r;
}

Photocopy.photocopyFiles(sourceFileNames, source, target, filterNamesExtension_changed_txt, errCallback);

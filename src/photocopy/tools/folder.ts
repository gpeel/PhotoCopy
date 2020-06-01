// import fs = require('fs');
import * as fs from 'fs';
import { File } from './file';

const path = require('path');

export class Folder {

  static readFileNamesFromFolder(folder: string): string[] {
    console.log('Read.readFolderFileNames: ' + folder);
    const files: string[] = [];
    fs.readdirSync(folder).forEach(file => {
      // rejecting the sub-folder inside the folder read.
      // CRITERIA : does NOT contains '.' inits name
      if (file.indexOf('.') > 0) {
        console.log( file);
        files.push(file);
      }
    });
    return files;
  }

  static copyFolderFiles(source: string, target, cb: (err: any) => void) {
    this.createFolderIfNotExist(target);
    const files = Folder.readFileNamesFromFolder(source);
    files.forEach(file => File.copyFile(path.join(source, file), path.join(target, file), console.log));
  }

  static copyFolderFilesList(fileNameList, source, target, cb: (err: any) => void) {
    this.createFolderIfNotExist(target);
    let timer = 0;
    fileNameList.forEach(file => {
      timer += 10;
      setTimeout(() => File.copyFile(path.join(source, file), path.join(target, file), console.log), timer);
    });
  }

  /**
   * a folder can only be created a FULL path like : C:/me/js/Typescript/tp/PhotoCopy/test
   * AND only tha LAST node (ie here ./test) could be created
   * @param folder
   */
  static createFolderIfNotExist(folder) {

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  }
}

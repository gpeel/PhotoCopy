// import fs = require('fs');
import * as fs from 'fs';
import {File} from './file';

export class Folder {

    static readFolderFileNames(folder: string): string[] {
        console.log('Read.readFolderFileNames: ' + folder);
        const files: string[] = [];
        fs.readdirSync(folder).forEach(file => {
            console.log(file);
            files.push(file);
        });
        return files;
    }

    static copyFolderFiles(source, target, cb: (err: any) => void) {
        this.createFolderIfNotExist(target);
        const files = Folder.readFolderFileNames(source);
        files.forEach(file => File.copyFile(source + file, target + file, console.log));
    }

    static copyFolderFilesList(fileNameList, source, target, cb: (err: any) => void) {
        this.createFolderIfNotExist(target);
        let timer = 0;
        fileNameList.forEach(file => {
            timer += 500;
            setTimeout(() => File.copyFile(source + file, target + file, console.log), timer);
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

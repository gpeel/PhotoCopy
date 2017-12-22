// import fs = require('fs');
import * as fs from 'fs';
import {File} from './file';

export class Folder {
    static readFolder(folder: string): string[] {
        console.log('Read.readFolder: ' + folder);
        const files: string[] = [];
        fs.readdirSync(folder).forEach(file => {
            console.log(file);
            files.push(file);
        });
        return files;
    }

    static copyFolder(source, target, cb: (err: any) => void) {

        const files = Folder.readFolder(source);
        files.forEach(file => File.copyFile(source + file, target + file, console.log));

    }
}

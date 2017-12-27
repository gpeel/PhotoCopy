// import fs = require('fs');
import {Folder} from './folder';

export class Photocopy {

    /**
     *  Read a list of file names (without their folders path) from sourceFileNames,
     *  Optionnaly transform the FileNames with the FilterFn param
     *  copy same(optionnaly transformed)  fileNames from source to target
     */
    static photocopyFiles(sourceFileNames,
                          source,
                          target,
                          filterNameFn: null | ( (fileName: string) => string),
                          cb: (err: any) => void) {
        console.log('Photocopy IN');

        const fileNames = Folder.readFolderFileNames(sourceFileNames);

        let transformedFileNames;
        if (filterNameFn) {
            transformedFileNames = fileNames.map(filterNameFn);
            console.log(transformedFileNames);
        }

        Folder.copyFolderFilesList(transformedFileNames,
            source, target, cb);
    }

}

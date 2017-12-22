// import fs = require('fs');
import * as fs from 'fs';

export class Read {
    static readFolder(folder: string) {
        console.log('Read.readFolder: ' + folder);

        fs.readdirSync(folder).forEach(file => {
            console.log(file);
        });
    }
}

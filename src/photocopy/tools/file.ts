// import fs = require('fs');
import * as fs from 'fs';

export class File {

    static copyFile(source, target, cb: (err: any) => void) {
        var cbCalled = false;

        var rd = fs.createReadStream(source);

        rd.on('error', (err) => done(err));

        var wr = fs.createWriteStream(target);

        wr.on('error', (err) => done(err));
        wr.on('close', (msg) => close(msg));

        rd.pipe(wr);

        function close(msg) {
            console.log('CLOSE');
            if (!cbCalled) {
                if (msg) {
                    cb(msg);
                }
                cbCalled = true;
            }
        }

        function done(err) {
            console.log('DONE');
            if (!cbCalled) {
                cb(err);
                cbCalled = true;
            }
        }
    }
}

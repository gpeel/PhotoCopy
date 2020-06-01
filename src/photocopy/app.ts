// import * as fs from 'fs';

import { Photocopy } from './tools/photocopy';

console.log('app');

const source = 'D:\\DCIM\\11100531';
const sourceFileNames = 'C:\\Users\\gauth\\Pictures\\PAROISSE\\Pentecote-2020\\best-famille';
const target = 'C:\\Users\\gauth\\Pictures\\PAROISSE\\Pentecote-2020\\best-famille-RAW';
const errCallback = console.log;

function filterNamesExtension_changed_txt(filename: string): string {
  let lastChar = 0;
  const dash = filename.indexOf('-');
  const point = filename.lastIndexOf('.');
  lastChar = dash > 0 ? dash : point;

  const r = filename.substr(0, lastChar) + '.ARW';
  console.log('changed fileName :' + r);
  return r;
}

Photocopy.photocopyFiles(sourceFileNames, source, target, filterNamesExtension_changed_txt, errCallback);

import * as _ from 'lodash';
import './photocopy/app';

console.log(`
****************
    PhotoCopy
****************`);
var res = _.padStart('the end', 20, '*');
var res = _.padEnd(res, 30, '*');
console.log(res);

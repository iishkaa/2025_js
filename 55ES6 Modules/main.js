import {PI,getCircum,getArea,getVolume} from './mathUtil.js'

console.log(PI);
const circum = getCircum(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circum.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);

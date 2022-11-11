
/*
Call this script using:

node find_color.js '#f6f5f7'

*/

/* https://www.npmjs.com/package/colorjs.io */
/* https://stackoverflow.com/questions/13586999/color-difference-similarity-between-two-values-with-js */

// will require: node --experimental-network-imports find_color.js '#f6f5f7'
// import Color from "https://colorjs.io/dist/color.js";
import Color from 'colorjs.io';
function diff(color1, color2) {
    const c1 = new Color(color1);
    const c2 = new Color(color2);
    return c1.deltaE(c2, "2000");
    // return c1.deltaE(c2, "76");
}

import windi_colors from 'windicss/colors'

const allColors = {};
(function dump(o, prefix = '') {
    for (const key in o) {
        const val = o[key];
        if (typeof val === 'string') {
            if (val.startsWith('#')) {
                allColors[prefix + key] = val;
            }
        } else {
            dump(val, `${key}-`);
        }
    }
})(windi_colors);

// console.log(allColors);
// console.log(process.argv)

const targetColor = process.argv[2];
if (!targetColor) {
    throw new Error('please specify color')
}

const sorted = Object.entries(allColors)
    .map(([k, v]) => [k, v, diff(targetColor, v)])
    .sort((a, b) => a[2] - b[2]);

// console.log(sorted.filter(x => x[2] == sorted[0][2]));
console.log(sorted.slice(0, 10));

"use strict";
let input;
input = 1;
input = 'asd';
input = ['str1', 'str2'];
const res = input;
// ------------------
function run(i) {
    if (typeof i == 'number') {
        console.log(`${i} - is number.`);
    }
    else if (typeof i == 'string') {
        console.log(`${i} - is string.`);
    }
    else {
        console.log(`${i} - unknown`);
    }
}
run(res);

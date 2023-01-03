"use strict";
function logId(id) {
    if (typeof id === 'number') {
        console.log(0 + `${id} - is a number.`);
    }
    else {
        console.log(typeof id);
    }
}
logId(1);
logId('str');
logId(false);
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
function logObj(obj) {
    if ('a' in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
logObj({ b: 5 });
logObj({ a: 2 });
function logMultipliesId(a, b) {
    if (a === b) {
        console.log(a, b);
    }
    else {
        console.log(a);
        console.log(b);
    }
}
let a = 'sTr';
function someFunc(obj) {
    if ('a' in obj) {
        console.log(obj.a.toLowerCase());
    }
    else {
        console.log(obj.b + 10);
    }
}
someFunc({ a: 'STrinG' });
someFunc({ b: 5 });

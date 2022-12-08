"use strict";
function getFullName(firstname, surname) {
    if (typeof firstname !== 'string') {
        throw new Error('bad');
    }
    return `${firstname} ${surname}`;
}
console.log(getFullName(true, false));

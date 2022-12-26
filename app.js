"use strict";
function logId(id) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase());
    }
    else if (typeof id === 'number') {
        console.log('0' + id);
    }
    else {
        console.log(`CAPS ON: ${id}`);
    }
}
logId('SOMEstr');
logId(1);
logId(false);

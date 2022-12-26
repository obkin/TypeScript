
function logId(id: (string | number | boolean)) {
    if (typeof id === 'string') {
        console.log(id);
    } else {
        console.log(id);
    }
};

logId('someStr');
logId(1);
logId(false);



function logError(err: (string | string[])) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
};



function logObj(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}



function logMultipliesId(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a.toUpperCase);
        console.log(b.toLowerCase);
    } else {
        console.log(a);
        console.log(b);
    }
}



let a: 12 = 12;


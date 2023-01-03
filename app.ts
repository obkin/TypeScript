
function logId(id: number | string | boolean) {
    if (typeof id === 'number') {
        console.log(0 + `${id} - is a number.`)
    } else {
        console.log(typeof id);
    }
}

logId(1);
logId('str');
logId(false);




function logError(err: string | string[] ) {
    if (Array.isArray(err)) {
        console.log(err);
    } else {
        console.log(err);
    }
}



function logObj(obj: { a: number } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a);
    } else {
        console.log(obj.b);
    }
}

logObj({b: 5});
logObj({a: 2});


function logMultipliesId(a: string | number, b: string | boolean) {
    if (a === b) {
        console.log(a, b);
    } else {
        console.log(a);
        console.log(b);
    }
}



let a: 'sTr' = 'sTr';


function someFunc(obj: { a: string } | { b: number }) {
    if ('a' in obj) {
        console.log(obj.a.toLowerCase());
    } else {
        console.log(obj.b + 10);
    }
}

someFunc({a: 'STrinG'});
someFunc({b: 5});
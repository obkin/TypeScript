let input: unknown;

input = 1;
input = 'asd';
input = ['str1', 'str2'];

const res: unknown = input;

// ------------------

function run(i: unknown) {
    if (typeof i == 'number') {
        console.log(`${i} - is number.`);
    } else if (typeof i == 'string') {
        console.log(`${i} - is string.`);
    } else {
        console.log(`${i} - unknown`);
    } 
}

run(res);

// ------------------

async function getData() {
    try {
        await fetch('');
    } catch(err) {
        if (err instanceof Error) {
            console.log(err.message);
        }
    }
}

// ------------------

async function getData2() {
    try {
        await fetch('');
    } catch(err) {
        const error = err as Error;
        console.log(error.message);
    }
}

// ------------------

type U1 = unknown | number;

type I1 = unknown & number;


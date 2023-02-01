let input: unknown;

input = 2;
input = ['str1', 'str2'];

let res: unknown = input; 
let res2: any = input; 

// --------------

function run(i: unknown) {
    if (typeof i === 'number') {
        i + 1;
    } else {
        return i;
    }
}

run(input);

// --------------

async function getData() {
    try {
        await fetch('');
    } catch(error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

// --------------

async function getData2() {
    try {
        await fetch('');
    } catch(error) {
        const e = error as Error;
        console.log(e.message);
    }
}

// --------------


type U1 = unknown | number;


type I1 = unknown & string;

 
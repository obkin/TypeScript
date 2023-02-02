// function generateError(message: string): never {
//     throw new Error(message);
// }

// ------------------

function dumpError(): never {
    // return 'str';
    while(true) {}
}

// ------------------

function rec() {
    return rec();
}

let a: void = undefined;

// ------------------

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            //...
            break;
        case 'checkout':
            //...
            break;
        case 'reject':
            //...
            break;
        default:
            const _problem: never = action;
            throw new Error('Немає такого action!');
    }
}

// ------------------

function generateError(message: string): never {
    throw new Error(message);
}

function isString(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    } 
    generateError('error :/');
}


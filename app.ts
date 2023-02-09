interface User {
    name: string;
}

const a = {};

function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    } else {
        throw new Error(`${obj} - is not a User!`)
    }
}

assertUser(a)
a.name = 'Vasya';


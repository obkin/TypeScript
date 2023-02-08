interface User {
    name: string;
    email: string;
    login: string;
}

interface Admin {
    name: string;
    role: number;
}

const user: User = {
    name: 'Vasya',
    email: 'vasya123@ukr.net',
    login: 'vasya_vasya'
}

function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}

// ---------

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

// ---------

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error(`${user} is not Admin`);
    }
}

// ---------

/*

function func(a: string | number) {
    if (isElemString(a)) {
        console.log(a);
    } else if (typeof a === 'number') {
        console.log(a);
    }
    console.log(a);
}

function isElemString(el: unknown): el is string {
    return el === 'string';
}

*/


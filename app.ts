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

// ---------

function logId(id: string | number) {
    if (isString(id)) {
        console.log(`${id} - is string!`);
    } else if (isNumber(id)) {
        console.log(`${id} - is number!`);
    }
}

function isString(a: string | number): a is string {
    return typeof a === 'string';
}

function isNumber(a: string | number): a is number {
    return typeof a === 'number'; 
}

// ---------

function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
}

function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error('User is not Admin.');
    }
}

// ---------

function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}


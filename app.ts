const a = 5;
const b:string = a.toString();

let e: string = new String(a).valueOf();
let f: boolean = new Boolean(a).valueOf();

let c = '1';
let d: number = parseInt(c);

// ---------

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

const admin = userToAdmin(user);

function userToAdmin(user: User): Admin {
    return {
        name: user.name,
        role: 1
    }
}


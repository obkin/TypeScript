let a = 5;
let b: string = a.toString();

let e: string = new String(a).valueOf();

let f: boolean = new Boolean(a).valueOf();

let c = '1';
let d: number = parseInt(c);

// ------------

interface User {
    name: string;
    email: string;
    login: string;
}

const user: User = {
    name: 'Vasiya',
    email: 'vasya@ukr.net',
    login: 'vasya777'
}

// ------------

interface Admin {
    name: string;
    role: number;
}


function userToAdmin(user: User): Admin {
    return {
        name: user.login, 
        role: 1
    }
}


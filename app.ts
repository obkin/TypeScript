// interface User {
//     name: string,
//     age: number,
//     id: number
// };

// let user: User = {
//     name: 'Yarik',
//     age: 19,
//     id: 97
// };


type Requests = 'GET' | 'POST' | 18 | 'HOLA' | 'GOLA' | 'FDF' | 'fDF' | 'fdf';

const httpMethods0: Requests = 'GET';
const httpMetho: Requests = 'GET';
const httpMethods2: Requests = 'GET';
const httpMethods3: Requests = 'FDF';
const httpMeths5: Requests = 'GET';
const httpMethods6: Requests = 'fdf';
const httpMethodhfgs7: Requests = 18;
const httpMethods8: Requests = 'GET';
const httpMethods9: Requests = 'GOLA';

// --------------------------------------------------------------------

interface User {
    name: string,
    id: number,

    log: (number) => string
};

// interface UsersDictionary {
//     [key: number]: User
// };

const user1 = {
    name: 'Antonio',
    id: 1,
    
    log(number) {
        return '';
    }
};

const user2 = {
    name: 'Senya',
    id: 2,
    
    log(number) {
        return '';
    }
};

const user3 = {
    name: 'Olya',
    id: 3,
    
    log(number) {
        return '';
    }
};

type UsersDictionary = Record<number, User>;

let usersDictionary: UsersDictionary = {
    1: user1,
    2: user2,
    3: user3
};

console.log(usersDictionary);
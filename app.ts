// type User = {
//     name: string,
//     age: number,
//     skills: string[]
// };

// type Role = {
//     roleId: number
// };

// type UserWithRole = User & Role;

interface User {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string
};

interface Role {
    roleId: number
};

interface Adress {
    // country: string,
    // city: string,
    // street: string,
    // building: number,
    // shortAdress: [string | number]
};

interface Friends {
    
}

interface UserWithRole extends User, Role, Adress, Friends {
    createdAt: Date;
};



let user: UserWithRole = {
    name: 'Yarik',
    age: 19,
    skills: ['Front-end', 'Back-end'],
    roleId: 14,
    createdAt: new Date,

    log(id) {
        return 'str';
    }
};

user.log(10);




// interface UserDictionary {
//     [index: number]: User
// };

type UserDictionary = {
    [index: number]: User
};

// type UserDictionary = Record<number, User>;

let someUser = {
    name: 'Yaroslav',
    surname: 'Gudz',
    age: 19
}; 


let someAnotherUser = 'user'
let etc = 'user'


let usersDictionary = {
    1: someUser,
    2: someAnotherUser,
    3: etc
};
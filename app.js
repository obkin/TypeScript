"use strict";
;
let user = {
    name: 'Yarik',
    // surname: 'Gudz'
};
// ----------------------------
function multiply(first, second) {
    if (!second) {
        return first;
    }
    else {
        return first * second;
    }
}
multiply(2);
let user1 = {
    login: 'kapell228@ukr.net',
};
function testPass(user) {
    const t = user.password ? user.password.type : undefined;
    console.log(t);
}
testPass(user1);
// ----------------------------
/*

interface User {
    login: string,
    password?: string
};

let user: User = {
    login: 'kapell228@ukr.net',
    // password: '123456'
};

// ------------------------------------



function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    } else {
        return first * second;
    }
}

multiply(5);

// ------------------------------------

interface UserPro {
    login: string,
    password?: {
        type: 'primary' | 'secondary'
    }
};


let someUser: UserPro = {
    login: 'kapell228@ukr.net',
}




function testPass(user: UserPro) {
    const t = user.password ? user.password.type : undefined;
}
 
testPass(someUser);

*/ 

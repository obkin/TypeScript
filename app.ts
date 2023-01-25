interface User {
    login: string;
    password?: string;
}

let user1: User = {
    login: 'yarik007',
    // password: 'hhhfffrrr334'
}

// function

function multiply(first: number, second: number = 5): number {
    if (!second) {
        return first;
    }
    return first * second;
}

multiply(5);

// obj

interface UserPro {
    login: string;
    password?: {
        type: 'primary' | 'secondary';
    }
}

let user2: UserPro = {
    login: 'kapellwork@gmail.com',
    // password: {
    //     type: 'primary'
    // }
}

function testPass(user: UserPro) {
    const t = user.password?.type;
    return console.log(t);
}

// testPass(user2);

// ??

function test(param?: string) {
    const t = param ?? multiply(5);
    console.log(t);
}

test();


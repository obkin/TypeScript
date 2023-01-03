type User = {
    name: string,
    age: number,
    skills: string[]
}

type Role = {
    name: string,
    id: number;
}

type UserWithRole = {
    user: User,
    role: Role
};

let user: UserWithRole = {
    name: 'Yarik',
    age: 19,
    skills: ['1', '2'],
    id: 9
};


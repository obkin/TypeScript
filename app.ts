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
    user: {
        name: 'Yarik',
        age: 19,
        skills: ['Front-end', 'Back-end']
    },
    role: {
        name: 'Developer',
        id: 777
    }
};


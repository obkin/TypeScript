interface User {
    name: string
};

interface User {
    age: number
};


let user: User = { 
    name: "Yarik",
    age: 19
};


type ID = number | string;

let id: ID = '10';

interface id {
    ID: number | string,
}
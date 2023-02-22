class User {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(name?: string) {
        if (typeof name === 'string') {
            this.name = name;
        }
    }
}



const user1 = new User('Vasya');
const user2 = new User( );
const user3 = new User(33);


class User {
    name: string;
    age: number;

    constructor();
    constructor(age: number);
    constructor(name: string);
    constructor(name: string, age: number); 
    constructor(ageOrName?: string | number, age?: number) {
        if (typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if (typeof ageOrName === 'number') {
            this.age = ageOrName;
        }

        if (typeof age === 'number') {
            this.age = age;
        }
    }
}

const user1 = new User('Vasya');
const user2 = new User( );
const user3 = new User(33);

const user4 = new User('Yarik', 33);

// const user5 = new User(12, 33);


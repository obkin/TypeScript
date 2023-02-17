class User {
    name: string;

    constructor(name) {
        this.name = name;
    }
}

// ---------

const user = new User('Vasya');

console.log(user);
user.name = 'Kolya';
console.log(user);

// ---------

class Admin {
    role: number;
}

const admin = new Admin();
admin.role = 1;


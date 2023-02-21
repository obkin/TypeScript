class User {
    name!: string;
    age!: number;
}

const user1 = new User();
user1.name = 'Yarik';
user1.age = 10;

// const user2 = new User('Kolya', 19);
// const user3 = new User('Sasha', 24);
// const user4 = new User('Nonstop', 100);

user1.name = 'Xuyarik';

console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);

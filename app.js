"use strict";
var User = (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var user1 = new User('Yarik', 20);
var user2 = new User('Kolya', 19);
var user3 = new User('Sasha', 24);
var user4 = new User('Nonstop', 100);
user1.name = 'Xuyarik';
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

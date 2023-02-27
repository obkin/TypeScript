"use strict";
class User {
    addSkill(skill) {
        this.skill = skill;
    }
}
;
const user1 = new User();
const user2 = new User();
const user3 = new User();
user1.addSkill(['C++', 'PHP']);
user1.addSkill('JS');

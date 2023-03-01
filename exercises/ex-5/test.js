"use strict";
// ts-05-41 - repeat
class User {
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
const newUser1 = new User();
newUser1.addSkill(['C++', 'TS']);
function run(distance) {
    if (typeof distance === 'string') {
        return 'str';
    }
    else {
        return 1;
    }
}
run(2);

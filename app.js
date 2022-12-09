"use strict";
function getFullName(userEntity) {
    return `${userEntity.firstname} ${userEntity.surname}`;
}
const user = {
    firstname: 'Ярослав',
    surname: 'Гудз',
    city: 'Husyatyn',
    age: 20
};
console.log(getFullName(user));

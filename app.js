"use strict";
const skills = ['Dev', 'DevOps', 'Testing'];
/*
for (const skill of skills) {
    console.log(skill.toLowerCase());
}
*/
const res = skills
    .filter((skill) => skill !== 'DevOps')
    .map(skill => skill + '! ')
    .reduce((a, b) => a + b);
console.log(res);

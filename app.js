"use strict";
let user1 = {
    login: 'yarik007',
    // password: 'hhhfffrrr334'
};
// function
function multiply(first, second = 5) {
    if (!second) {
        return first;
    }
    return first * second;
}
multiply(5);
let user2 = {
    login: 'kapellwork@gmail.com',
    // password: {
    //     type: 'primary'
    // }
};
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
    return console.log(t);
}
// testPass(user2);
// ??
function test(param) {
    if (!param) {
        console.log(multiply(5));
    }
    else {
        console.log(param);
    }
}
test();

"use strict";
;
let user = {
    login: 'kapell228@ukr.net',
    // password: '123456'
};
// ------------------------------------
function multiply(first, second) {
    if (!second) {
        return first * first;
    }
    else {
        return first * second;
    }
}
multiply(5);
;
let someUser = {
    login: 'kapell228@ukr.net',
};
function testPass(user) {
    var _a;
    const t = (_a = user.password) === null || _a === void 0 ? void 0 : _a.type;
}
testPass(someUser);

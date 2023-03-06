"use strict";
class User {
    set login(l) {
        if (typeof l === 'string') {
            this._login = 'user-' + l;
        }
        else {
            this._login = 'user-number-' + l;
        }
    }
    get login() {
        return 'no_login';
    }
}
;
const newUser = new User();
newUser.login = 178;
console.log(newUser);

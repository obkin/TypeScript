"use strict";
class User {
    set login(l) {
        this._login = 'user-' + l;
    }
    get login() {
        return 'no_login';
    }
}
;
const user1 = new User();
console.log(user1.login);

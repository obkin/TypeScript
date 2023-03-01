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
/*
user1.login = 'user-';
user1.login += 'obkin';
*/
// user1.setLogin('obkin');
// user1.login = 'obkin';
console.log(user1.login);

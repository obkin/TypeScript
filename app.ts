class User {
    _login: string;
    password: string;

    set login(l: string) {
        this._login = 'user-' + l;
    }

    get login() {
        return 'no_login';
    }

    // setLogin(l: string): void {
    //     this.login = 'user-' + l;
    // }
};

const user1 = new User();

/*
user1.login = 'user-';
user1.login += 'obkin';
*/

// user1.setLogin('obkin');

// user1.login = 'obkin';
console.log(user1.login);


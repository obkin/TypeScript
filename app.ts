class User {
    _login: string;
    password: string;

    set login(l: string | number) {
        this._login = 'user-' + l;
    }

    get login() {
        return this._login;
    }

    async setPassword(p: string) {
        //...
    }

};

const user1 = new User();

user1.login = 'obkin';

console.log(user1.login);


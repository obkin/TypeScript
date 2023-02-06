// const n1: any = null;
// const n2: null = null;

// const n3: undefined = null;
// const n4: number = null;
// const n5: string = null;
// const n6: boolean = null;



interface User {
    name: string;
}

function getUser() {
    if (Math.random() > 0.5) {
        return null;
    } else {
        return {
            name: 'Valik'
        } as User
    }
}



const user = getUser();

if (user) {
    const userName = user.name;
}


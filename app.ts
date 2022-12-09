function getFullName(userEntity: { firstname: string, surname: string }): string {
    return `${userEntity.firstname} ${userEntity.surname}`;
}

const user = {
    firstname: 'Ярослав',
    surname: 'Гудз',
    city: 'Husyatyn',
    age: 20,
    skills: {
        dev: true,
        devops: true
    }
};

console.log(getFullName(user));
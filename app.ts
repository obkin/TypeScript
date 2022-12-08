function getFullName(firstname: string, surname: string): string {
    if (typeof firstname !== 'string') {
        throw new Error('bad');
    }

    return `${firstname} ${surname}`;
}

console.log(getFullName('Ярослав', 'Гудз'));
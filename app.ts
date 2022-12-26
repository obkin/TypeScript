function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id.toLowerCase() + ' - string');
    } else if (typeof id === 'number') {
        console.log(id + ' - number');
    } else {
        console.log(id + ' - boolean');
    }
}

logId(1);
logId('Yarik');
logId(true);
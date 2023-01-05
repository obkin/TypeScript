"use strict";
function fetchWidthAuth(url, method) {
    return 1;
}
fetchWidthAuth('http://youtube.com', 'POST');
// interface AboutCompany {
//     name: string,
//     capital: string,
//     age: number,
//     owners: string[]
// };
let company = {
    info: {
        name: "DREAM",
        capital: '$' + 43876,
        age: 7,
        owners: ['Udyanskiy Mykola', 'Dmitriy Gordon', 'Petro Poroshenko']
    },
    id: {
        name: "DREAM",
        compID: 98134
    }
};
console.log(company.info.capital);

type httpMethod = 'GET' | 'POST';

type coolString = string;

function fetchWidthAuth(url: coolString, method: httpMethod): 1 | -1 {
    return 1;
}

fetchWidthAuth('http://youtube.com', 'POST');

//


type CompanyInfo = {
    name: string,
    capital: string,
    age: number,
    owners: string[]
};

type CompanyID = {
    name: string,
    compID: number
};

type CompanyWithID = {
    info: CompanyInfo,
    id: CompanyID
}


// interface AboutCompany {
//     name: string,
//     capital: string,
//     age: number,
//     owners: string[]
// };

let company: CompanyWithID = {
    info: {
        name: "DREAM",
        capital: '$' + 43_876,
        age: 7,
        owners: ['Udyanskiy Mykola', 'Dmitriy Gordon', 'Petro Poroshenko']
    },

    id: {
        name: "DREAM",
        compID: 98134
    }
};

console.log(company.info.capital);
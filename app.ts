




function fetchWithAuth(url: string, method: 'GET' | 'POST'): string {
    return 'str';
};

fetchWithAuth('https://youtube.com', 'GET');



let method = 'notGET';

fetchWithAuth('https://youtube.com', method as 'GET');
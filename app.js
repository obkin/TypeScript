"use strict";
<<<<<<< HEAD
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 200] = "SUCCESS";
    StatusCode[StatusCode["IN_PROCESS"] = 201] = "IN_PROCESS";
    StatusCode[StatusCode["FAILED"] = 202] = "FAILED";
})(StatusCode || (StatusCode = {}));
const res = {
    message: 'Payment was success',
    statusCode: 201
};
if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Successful status!');
}
else if (res.statusCode === StatusCode.IN_PROCESS) {
    console.log('In process...');
}
else if (res.statusCode === StatusCode.FAILED) {
    console.log('Failed status.');
}
else {
    console.log('Unknown status :/');
}
// 1 - success
// 2 - in process
// 3 - was failed
=======
const numbers = ['Dev', 1, 2];
const [st, num1, num2] = numbers;
console.log(st);
console.log(num1);
console.log(num2);
>>>>>>> 6af4d846e00ca310091b7e245f1ff37de7daaeae

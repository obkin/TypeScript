enum StatusCode {
    SUCCESS = 200,
    IN_PROCESS,
    FAILED
}

const res = {
    message: 'Payment was success',
    statusCode: 201
};

if (res.statusCode === StatusCode.SUCCESS) {
    console.log('Successful status!');

} else if (res.statusCode === StatusCode.IN_PROCESS) {
    console.log('In process...');
} else if(res.statusCode === StatusCode.FAILED) {
    console.log('Failed status.');
} else {
    console.log('Unknown status :/');
}

// 1 - success
// 2 - in process
// 3 - was failed


function logId(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } if (isNumber(id)) {
        console.log(id);
    }
}

function isString(a: string | number): a is string {
    return typeof a === 'string';
}

function isNumber(b: number | string): b is number {
    return typeof b === 'number';
}


// ---------


interface User {
    name: string;
    email: string;
    login: string;
}

interface Admin {
    name: string;
    role: number;
}

function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        throw new Error(`${user} - is not an Admin!`)
    }
}

function isAdmin(user: Admin | User): user is Admin {
    return 'role' in user;
}

function isAdminAlternative(user: Admin | User): user is Admin {
    return (user as Admin).role !== undefined;
}


// ---------


// Technical

interface Payment {
    sum: number;
    from: number;
    to: number;
}

enum ResponseStatus {
    Success = 'success',
    Failed = 'failed'
}

// Request

interface PaymentRequest extends Payment {}

// Response

interface PaymentSuccess extends Payment { 
    databaseId: number;
}

interface PaymentFailed {
    errorMessage: string;
    errorCode: number;
}

interface IPaymentResponseSuccess {
    status: ResponseStatus.Success;
    data: PaymentSuccess;
}

interface IPaymentResponseFailed {
    status: ResponseStatus.Failed;
    data: PaymentFailed;
}


// ---------

type IResponse = IPaymentResponseFailed | IPaymentResponseSuccess;

function isSuccessFunc(res: IResponse): res is IPaymentResponseSuccess {
    if (res.status === ResponseStatus.Success) {
        return true;
    } else {
        return false;
    }
}

function getDatabaseIdFunc(res: IResponse): number {
    if (isSuccessFunc(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}

// ---------

const a = {};

assertUser(a);
a.name = 'Vova'; 


function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === 'object' && !!obj && 'name' in obj) {
        return;
    } else {
        throw new Error(`${obj} - is not a User!`);
    }
}

 
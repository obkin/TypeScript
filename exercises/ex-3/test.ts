// Technical

interface Payment {
    sum: number;
    from: number;
    to: number;
}

enum ResponseStatus {
    SUCCESS = 'success',
    FAILED = 'failed'
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

interface PaymentResponseSuccess {
    status: ResponseStatus.SUCCESS;
    data: PaymentSuccess;
}

interface PaymentResponseFailed {
    status: ResponseStatus.FAILED;
    data: PaymentFailed;
}


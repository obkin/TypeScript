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

interface IPaymentResponseSuccess {
    status: ResponseStatus.SUCCESS;
    data: PaymentSuccess;
}

interface IPaymentResponseFailed {
    status: ResponseStatus.FAILED;
    data: PaymentFailed;
}

// --- TypeGuard ---

type IPaymentResponse = IPaymentResponseSuccess | IPaymentResponseFailed;

function isSuccess(res: IPaymentResponse): res is IPaymentResponseSuccess {
	if (res.status === ResponseStatus.SUCCESS) {
		return true;
	} else {
		return false;
	}
}

function getDatabaseId(response: IPaymentResponse): number {
	if (isSuccess(response)) {
		return response.data.databaseId;
	} else {
		throw new Error(response.data.errorMessage);
	}
}


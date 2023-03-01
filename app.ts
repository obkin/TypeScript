// ts-5-40 - repeat

enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus = PaymentStatus.Holded;
    createdAt: Date = new Date();
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }
    
    unholdPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('The payment was processed :/');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
};

const newPayment1 = new Payment(1);

newPayment1.unholdPayment();
console.log(newPayment1);

console.log('\n');

console.log(newPayment1.getPaymentLifeTime());

// ------------------

function paymentAutoUnhold() {
    if (newPayment1.getPaymentLifeTime() === 30000) {
        newPayment1.unholdPayment();
    }
}


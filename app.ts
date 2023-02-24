enum PaymentStatus {
    Holded,
    Processed,
    Reversed
}

class Payment {
    id: number;
    status: PaymentStatus;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('Помилка: платіж завершено, кошти списані.');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const payment1 = new Payment(1);
payment1.unholdPayment();
console.log(payment1);
const time = payment1.getPaymentLifeTime();
console.log(time);


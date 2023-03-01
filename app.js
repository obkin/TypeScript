"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createdAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createdAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('The payment was processed :/');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
;
const newPayment1 = new Payment(1);
newPayment1.unholdPayment();
console.log(newPayment1);
console.log('-------LifeTime--------');
console.log(newPayment1.getPaymentLifeTime());

export class PaymentDto {
    id;
    holderName;
    cardNumber;
    cvv;
    isActive;

    static parse = (model) => new PaymentDto(model);

    constructor(model) {
        this.id = model._id;
        this.holderName = model.holderName;
        this.cardNumber = model.cardNumber;
        this.cvv = model.cvv;
        this.isActive = model.isActive;
    }
}
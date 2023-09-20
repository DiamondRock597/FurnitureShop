export class OrderDto {
    id;
    status;
    createdAt;
    quantity;
    totalAmount;
    delieveryTax;

    static parse = (model) => new OrderDto(model);

    constructor(model) {
        this.createdAt = model.createdAt;
        this.id = model._id;
        this.quantity = model.quantity;
        this.totalAmount = model.totalAmount;
        this.status = model.status;
        this.delieveryTax = model.delieveryTax;
    }
}
export class BasketItemDto {
    id;
    productName;
    productCost;
    quantity;
    productDescription;

    static parse = (model) => new BasketItemDto(model);

    constructor(model) {
        console.log({ model });
        this.id = model._id;
        this.productName = model.furniture.name;
        this.productCost = model.furniture.cost;
        this.productDescription = model.furniture.description;
        this.quantity = model.quantity;
    }
}
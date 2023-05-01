export class ShippingAddressDto {
    id;
    address;
    zipcode;
    name;
    country;
    isActive;
    city;

    static parse = (model) => new ShippingAddressDto(model);

    constructor(model) {
        this.address = model.address;
        this.zipcode = model.zipcode;
        this.name = model.name;
        this.country = model.country;
        this.isActive = model.isActive;
        this.city = model.city;
        this.id = model._id;
    }
}
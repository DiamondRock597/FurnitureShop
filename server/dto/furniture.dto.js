export class FurnitureDto {
    id;
    name;
    cost;
    image;
    description;

    static parse = (model) => new FurnitureDto(model);

    constructor(model) {
        this.id = model._id;
        this.cost = model.cost;
        this.description = model.description;
        this.name = model.name;
        this.image = model.image;
    }
}
export class FavouriteDto {
    id;
    furnitureCost;
    furnitureName;

    static parse = (model) => new FavouriteDto(model);

    constructor(model) {
        this.id = model._id;
        this.furnitureCost = model.furniture.cost;
        this.furnitureName = model.furniture.name;
    }
}
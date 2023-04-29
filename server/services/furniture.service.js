import { FurnitureModel } from '../models/furniture.model.js';

class FurnitureService {
    getList = () => FurnitureModel.find()

    getFurniture = (id) => FurnitureModel.findById(id);
}

export const furnitureService = new FurnitureService();
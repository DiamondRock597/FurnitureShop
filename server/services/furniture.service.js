import { FurnitureModel } from '../models/furniture.model.js';

class FurnitureService {
    getList = () => FurnitureModel.find()
}

export const furnitureService = new FurnitureService();
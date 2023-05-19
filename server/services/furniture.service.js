import { FurnitureDto } from '../dto/furniture.dto.js';
import { FurnitureModel } from '../models/furniture.model.js';

class FurnitureService {
    getList = async () => {
        const products = await FurnitureModel.find();

        return products.map(FurnitureDto.parse);
    }

    getFurniture = async (id) => {
        const product = await FurnitureModel.findById(id);

        return FurnitureDto.parse(product);
    };
}

export const furnitureService = new FurnitureService();
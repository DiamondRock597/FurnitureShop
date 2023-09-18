import { BasketItemDto } from '../dto/basket-item.dto.js';
import { BasketItemModel } from '../models/basket-item.model.js'

class BasketItemService {
    createItem = async (basketId, furnitureId, quantity = 1) => {
        const basketItem = await BasketItemModel.findOneAndUpdate(
            { basketId, furniture: furnitureId },
            { $inc: { quantity } },
            { new: true, upsert: true }
        );

        return BasketItemDto.parse(basketItem);
    };

    updateBasketItem = async (basketItem) => {
        if (basketItem.quantity <= 0) {
            return this.deleteItem(basketItem.id);
        }

        await BasketItemModel.findByIdAndUpdate(basketItem.id, { quantity: basketItem.quantity });
        return basketItem.id;
    }

    getList = async (basketId) => {
        if (!basketId) {
            return [];
        }

        const list = await BasketItemModel.find({ basketId }).populate('furniture').exec();
        return list.map(BasketItemDto.parse);
    };

    deleteItem = async (id) => {
        await BasketItemModel.findByIdAndDelete(id);
        return id;
    };

}

export const basketItemService = new BasketItemService();
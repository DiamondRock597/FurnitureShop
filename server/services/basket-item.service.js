import { BasketItemDto } from '../dto/basket-item.dto.js';
import { BasketItemModel } from '../models/basket-item.model.js'

class BasketItemService {
    createItem = async (basketId, furnitureId, quantity = 1) => {
        const basketItem = await BasketItemModel.findOneAndUpdate(
            { basketId, furnitureId },
            { $inc: { quantity } },
            { new: true, upsert: true }
        );

        return BasketItemDto.parse(basketItem);
    };

    incrementQuantity = async (id) => {
        await BasketItemModel.findByIdAndUpdate(id, { $inc: { quantity: 1 } });
        return id;
    }

    decrementQuantity = async (id) => {
        const basketItem = await BasketItemModel.findById(id);
        basketItem.quantity -= 1;

        if (basketItem.quantity <= 0) {
            return this.deleteItem(basketItem._id);
        }

        await basketItem.save();
        return id;
    }

    getList = async (basketId) => {
        const list = await BasketItemModel.find({ basketId }).populate('furniture').exec();
        return list.map(BasketItemDto.parse);
    };

    deleteItem = async (id) => {
        await BasketItemModel.findByIdAndDelete(id);
        return id;
    };
}

export const basketItemService = new BasketItemService();
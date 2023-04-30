import { BasketItemModel } from '../models/basket-item.model.js'

class BasketItemService {
    createItem = (basketId, furnitureId, quantity = 1) => BasketItemModel.findOneAndUpdate(
        { basketId, furnitureId },
        { $inc: { quantity } },
        { new: true, upsert: true }
    );

    incrementQuantity = async (id) => {
        await BasketItemModel.findByIdAndUpdate(id, { $inc: { quantity: 1 } });
        return id;
    }

    decrementQuantity = async (id) => {
        await BasketItemModel.findByIdAndUpdate(id, { $inc: { quantity: -1 } });
        return id;
    }

    getList = (basketId) => BasketItemModel.find({ basketId }).populate('furniture').exec();

    deleteItem = async (id) => {
        await BasketItemModel.findByIdAndDelete(id);
        return id;
    };
}

export const basketItemService = new BasketItemService();
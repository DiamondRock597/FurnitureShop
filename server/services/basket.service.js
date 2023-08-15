import { GraphQLError } from "graphql";

import { BasketModel } from "../models/basket.model.js";
import { basketItemService } from "./basket-item.service.js";

class BasketService {
    getBasketList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }
        const basket = await BasketModel.findOne({ userId });

        const items = await basketItemService.getList(basket?._id);
        const total = await this.getTotal(items);

        return { items, total }
    }

    getTotal = async (list) => {
        return list.reduce((prev, curr) => prev + curr.quantity * curr.productCost, 0);
    }

    addToBasket = async (userId, furnitureId, quantity) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        const basket = await BasketModel.findOneAndUpdate({ userId, status: 'Free' }, { userId }, { new: true, upsert: true, });
        await basketItemService.createItem(basket._id, furnitureId, quantity);

        return basket._id;
    }

    incrementItem = (basketItemId) => basketItemService.incrementQuantity(basketItemId);

    decrementItem = (basketItemId) => basketItemService.decrementQuantity(basketItemId);

    deleteItem = (basketItemId) => basketItemService.deleteItem(basketItemId);
}

export const basketService = new BasketService();
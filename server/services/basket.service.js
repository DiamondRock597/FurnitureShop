import { GraphQLError } from "graphql";

import { BasketModel } from "../models/basket.model.js";
import { basketItemService } from "./basket-item.service.js";

class BasketService {
    getBasketList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }
        const basket = await BasketModel.findOne({ userId, status: 'Pending' });

        const items = await basketItemService.getList(basket?._id);
        const total = this.getTotal(items);
        const totalAmount = this.getTotalAmount(items);

        return { items, total, totalAmount }
    }

    getTotal = (list) => {
        return list.reduce((prev, curr) => prev + curr.quantity * curr.productCost, 0);
    }

    getTotalAmount = (list) => {
        return list.reduce((prev, current) => prev + current.quantity, 0);
    }

    addToBasket = async (userId, furnitureId, quantity) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        const basket = await BasketModel.findOneAndUpdate({ userId, status: 'Pending' }, { userId }, { new: true, upsert: true, });
        await basketItemService.createItem(basket._id, furnitureId, quantity);

        return basket._id;
    }

    updateBasketItem = (basketItem) => basketItemService.updateBasketItem(basketItem)

    deleteItem = (basketItemId) => basketItemService.deleteItem(basketItemId);

    submitBasket = (userId) => BasketModel.findOneAndUpdate({ userId, status: 'Pending' }, { status: 'Submitted' });
}

export const basketService = new BasketService();
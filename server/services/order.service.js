import { basketService } from './basket.service.js';
import { OrderModel } from '../models/order.model.js';
import { OrderDto } from '../dto/order.dto.js';
import { GraphQLError } from 'graphql';

class OrderService {
    static delieveryTax = 0.05;

    createOrder = async (userId, shippingAddress, payment) => {
        const { total, totalQuantity } = await basketService.getBasketList(userId);

        const order = await OrderModel.create({
            totalAmount: total * OrderService.delieveryTax,
            quantity: totalQuantity,
            userId,
            shippingAddress,
            payment,
            delieveryTax: OrderService.delieveryTax
        });

        await basketService.submitBasket(userId);

        return OrderDto.parse(order);
    }

    submitOrder = async () => {

    }

    getActiveOrder = async (userId) => {
        const activeOrder = await OrderModel.findOne({ userId, status: 'Pending' }).populate(['paymentId', 'shippingAddressId']).exec();

        if (!activeOrder) {
            throw new GraphQLError('You don not have active order to submit');
        }

        return OrderDto.parse(activeOrder);
    }
}

export const orderService = new OrderService();
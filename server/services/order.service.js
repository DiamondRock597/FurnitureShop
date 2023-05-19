import { basketService } from './basket.service.js';
import { OrderModel } from '../models/order.model.js';
import { OrderDto } from '../dto/order.dto.js';

class OrderService {
    static delieveryTax = 0.05;

    createOrder = async (userId, shippingAddressId, paymentId) => {
        const basketList = await basketService.getBasketList(userId);
        const totalAmount = basketList.reduce((prev, current) => prev + (current.quantity * current.productCost), 0) * OrderService.delieveryTax;
        const quantity = basketList.reduce((prev, current) => prev + current.quantity, 0);

        const order = await OrderModel.create({
            totalAmount,
            quantity,
            userId,
            shippingAddressId,
            paymentId
        });

        return OrderDto.parse(order);
    }

    getList = async (userId) => {
        const orderList = await OrderModel.find({ userId });

        return orderList.map(OrderDto.parse);
    }
}

export const orderService = new OrderService();
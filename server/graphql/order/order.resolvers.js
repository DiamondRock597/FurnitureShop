import { GraphQLError } from "graphql";

import { orderService } from "../../services/order.service.js";

export const orderResolvers = {
    Query: {
        orders: async (root, args, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return orderService.getList(userId);
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createOrder: async (root, { paymentId, shippingAddressId }, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return orderService.createOrder(userId, shippingAddressId, paymentId);
            } catch (error) {
                return error;
            }
        }
    }
}
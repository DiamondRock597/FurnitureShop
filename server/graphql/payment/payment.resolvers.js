import { GraphQLError } from "graphql";

import { paymentService } from "../../services/payment.service.js";

export const paymentResolver = {
    Mutation: {
        createPaymentMethod: async (root, { input }, { userId, isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return paymentService.createPaymentMethod(userId, input);
            } catch (error) {
                return error;
            }
        },
        updatePaymentMethod: async (root, { input, id }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return paymentService.updatePaymentMethod(id, input);
            } catch (error) {
                return error;
            }
        }
    }
}
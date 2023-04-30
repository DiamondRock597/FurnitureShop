import { GraphQLError } from "graphql";

import { paymentService } from "../../services/payment.service.js";

export const paymentResolver = {
    Query: {
        getPayments: async (root, args, { userId, isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return paymentService.getList(userId);
            } catch (error) {
                return error;
            }
        }
    },
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
        togglePayment: async (root, { input }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return paymentService.togglePayment(input)
            } catch (error) {
                return error;
            }
        }
    }
}
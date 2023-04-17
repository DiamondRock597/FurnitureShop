import { GraphQLError } from "graphql";

import { shippingAddressService } from "../../services/shipping-address.service.js";

export const shippingAddressResolver = {
    Query: {
        getShippingAddresses: async (root, { input }, { userId, isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return shippingAddressService.getList(userId)
            } catch (error) {
                return error;
            }
        },
    },
    Mutation: {
        togleAddress: (root, { input }, { isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }
                return shippingAddressService.setActiveAddress(input);
            } catch (error) {
                return error;
            }
        },
        createShippingAddress: async (root, { input }, { userId, isAuth }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return shippingAddressService.createAddress(userId, input)
            } catch (error) {
                return error;
            }
        }
    }
}
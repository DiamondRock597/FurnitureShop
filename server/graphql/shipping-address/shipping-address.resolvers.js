import { GraphQLError } from "graphql";

import { shippingAddressService } from "../../services/shipping-address.service.js";

export const shippingAddressResolver = {
    Mutation: {
        createShippingAddress: (root, { input }, { userId, isAuth }) => {
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
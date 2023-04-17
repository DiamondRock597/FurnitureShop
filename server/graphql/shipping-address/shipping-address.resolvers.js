import { GraphQLError } from "graphql";

import { shippingController } from "../../controllers/shipping-address.controller.js";

export const shippingAddressResolver = {
    Query: {
        getShippingAddresses: async (root, args, context) => {
            if (!context.isAuth) {
                throw new GraphQLError('User is not authinticated');
            }

            return shippingController.getAddresses();
        },
        getShippingAddress: async (root, { input }, context) => {
            if (!context.isAuth) {
                throw new GraphQLError('User is not authinticated');
            }


        }
    },
    Mutation: {
        setActiveAddress: (root, { input }) => {

        },
        createShippingAddress: (root, { input }) => {

        }
    }
}
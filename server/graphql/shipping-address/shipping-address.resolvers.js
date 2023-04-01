import { GraphQLError } from "graphql"

export const shippingAddressResolver = {
    Query: {
        getShippingAddresses: async (root, req, context) => {
            if (!context.isAuth) {
                throw new GraphQLError('User is not authinticated');
            }

            return shippingAddressController.getAddresses();
        }
    },
    Mutation: {
        setActiveAddress: (root, { input }) => shippingAddressController.setActiveAddress(input)
    }
}
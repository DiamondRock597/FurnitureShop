import { makeExecutableSchema, } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';

import { userSchema, userResolvers } from './user/index.js';
import { shippingAddressResolver, shippingAddressSchema } from './shipping-address/index.js';

export const schema = makeExecutableSchema({
    typeDefs: [
        userSchema,
        shippingAddressSchema
    ],
    resolvers: mergeResolvers([shippingAddressResolver, userResolvers])
})
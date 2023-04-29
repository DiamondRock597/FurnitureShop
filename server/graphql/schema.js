import { makeExecutableSchema, } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';

import { userSchema, userResolvers } from './user/index.js';
import { shippingAddressResolver, shippingAddressSchema } from './shipping-address/index.js';
import { paymentResolver, paymentSchema } from './payment/index.js';
import { furnitureResolovers, furnitureSchema } from './furniture/index.js';

export const schema = makeExecutableSchema({
    typeDefs: [
        userSchema,
        shippingAddressSchema,
        paymentResolver,
        furnitureResolovers
    ],
    resolvers: mergeResolvers([userResolvers, shippingAddressResolver, paymentSchema, furnitureSchema])
})
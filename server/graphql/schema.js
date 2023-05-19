import { makeExecutableSchema, } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';

import { userSchema, userResolvers } from './user/index.js';
import { shippingAddressResolver, shippingAddressSchema } from './shipping-address/index.js';
import { paymentResolver, paymentSchema } from './payment/index.js';
import { furnitureResolovers, furnitureSchema } from './furniture/index.js';
import { favouriteSchema, favouriteResolvers } from './favourite/index.js';
import { basketSchema, basketResolvers } from './basket/index.js';
import { orderResolvers, orderSchema } from './order/index.js'

export const schema = makeExecutableSchema({
    typeDefs: [
        userSchema,
        shippingAddressSchema,
        paymentSchema,
        furnitureSchema,
        favouriteSchema,
        basketSchema,
        orderSchema
    ],
    resolvers: mergeResolvers([
        userResolvers,
        shippingAddressResolver,
        paymentResolver,
        furnitureResolovers,
        favouriteResolvers,
        basketResolvers,
        orderResolvers
    ])
})
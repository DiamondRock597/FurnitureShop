import { makeExecutableSchema, } from '@graphql-tools/schema';
import { mergeResolvers } from '@graphql-tools/merge';

import { userSchema, userResolvers } from './user/index.js';

export const schema = makeExecutableSchema({
    typeDefs: [
        userSchema
    ],
    resolvers: mergeResolvers(
        userResolvers
    )
})
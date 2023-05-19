import { GraphQLError } from "graphql";

import { userService } from "../../services/user.service.js";

export const userResolvers = {
    Query: {
        profile: async (root, args, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return userService.getUser(userId);
            } catch (error) {
                console.log({error});
                return error;
            }
        }
    },
    Mutation: {
        createUser: async (root, { input }) => {
            try {
                const { email, password, name } = input;
                return await userService.register(email, password, name);
            } catch (error) {
                return error;
            }
        },
        login: async (root, { input }) => {
            try {
                const { email, password } = input;
                return await userService.login(email, password);
            } catch (error) {
                return error;
            }
        }
    }
}
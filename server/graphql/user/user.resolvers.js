import { GraphQLError } from "graphql";

import { userService } from "../../services/user.service.js";

export const userResolvers = {
    Query: {
        profile: (root, args, { isAuth, userId }) => {
            try {
                if (!isAuth) {
                    throw new GraphQLError('User is not authinticated');
                }

                return userService.getUser(userId);
            } catch (error) {
                return error;
            }
        }
    },
    Mutation: {
        createUser: (root, { input }) => {
            try {
                const { email, password, name } = input;
                return userService.register(email, password, name);
            } catch (error) {
                return error;
            }
        },
        login: (root, { input }) => {
            try {
                const { email, password } = input;
                return userService.login(email, password);
            } catch (error) {
                return error;
            }
        }
    }
}
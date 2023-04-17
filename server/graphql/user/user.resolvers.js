import { userService } from "../../services/user.service.js";

export const userResolvers = {
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
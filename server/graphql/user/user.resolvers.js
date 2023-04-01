import { userController } from "../../controllers/user-controller.js"

export const userResolvers = {
    Query: {
        getName: async (root, req, context) => {
            if (!context.isAuth) {
                return '';
            }

            const name = await userController.findName(context.userId);
            return { name };
        },
    },
    Mutation: {
        createUser: (root, { input }) => userController.registration(input),
        login: (root, { input }) => userController.login(input)
    }
}
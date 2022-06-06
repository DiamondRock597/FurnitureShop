import { userService } from '../services/user-service.js';

class UserController {
    registration = async (req) => {
        try {
            const { email, password } = req;
            return await userService.register(email, password);
        } catch (error) {
            console.log({ error });
        }
    }

    login = async (req) => {
        try {
            const { email, password } = req;
            return await userService.login(email, password);
        } catch (error) {
            console.log({ error });
        }
    }

}

export const userController = new UserController();
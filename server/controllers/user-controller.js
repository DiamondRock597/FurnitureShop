import { tokenService } from '../services/token-service.js';
import { userService } from '../services/user-service.js';

class UserController {
    registration = async (req) => {
        try {
            const { email, password, name } = req;
            return await userService.register(email, password, name);
        } catch (error) {
            return error;
        }
    }

    login = async (req) => {
        try {
            const { email, password } = req;
            return await userService.login(email, password);
        } catch (error) {
            return error;
        }
    }

    findName = async (id) => {
        try {
            return await userService.getName(id);
        } catch (error) {
            console.log({ error });
        }
    }

}

export const userController = new UserController();
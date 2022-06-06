import bcrypt from 'bcrypt';
import { UserModel } from '../models/user-model.js';
import { tokenService } from './token-service.js';
import { UserDto } from '../dto/user-dto.js';

//TODO: create error catcher
class UserService {
    register = async (email, password) => {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            console.log('Already exist');
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ email, password: hashPassword });

        const userDto = new UserDto(user);
        const accessToken = await tokenService.generateToken({ ...userDto });

        return { accessToken, user: userDto }
    }

    login = async (email, password) => {
        const user = await UserModel.findOne({ email });

        if (!user) {
            console.log('Does not exist');
        }

        const isPasswordEquals = await bcrypt.compare(password, user.password);

        if (!isPasswordEquals) {
            console.log('Password is not right');
        }

        const userDto = new UserDto(user);
        const accessToken = await tokenService.generateToken({ ...userDto });

        return { accessToken, user: userDto }
    }
}

export const userService = new UserService();
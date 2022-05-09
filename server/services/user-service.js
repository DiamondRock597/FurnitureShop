import bcrypt from 'bcrypt';
import { UserModel } from '../models/user-model.js';
import { tokenService } from './token-service';
import { UserDto } from '../dto/user-dto.js';

class UserService {
    register = async (email, password) => {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            throw new Error('Already exist');
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ email, password: hashPassword });

        const userDto = new UserDto(user);
        const { refreshToken, accessToken } = tokenService.generateToken({ ...userDto });
        await tokenService.saveToken(userDto.id, refreshToken);

        return { refreshToken, accessToken, user: userDto }
    }
}

export const userService = new UserService();
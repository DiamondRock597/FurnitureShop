import bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

import { UserModel } from '../models/user-model.js';
import { tokenService } from './token.service.js';
import { UserDto } from '../dto/user-dto.js';

//TODO: create error catcher
class UserService {
    register = async (email, password, name) => {
        const candidate = await UserModel.findOne({ email });

        if (candidate) {
            throw new GraphQLError('Already exist');
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const user = await UserModel.create({ email, password: hashPassword, name });

        const userDto = new UserDto(user);
        const accessToken = await tokenService.generateToken({ ...userDto });

        return { accessToken, user: userDto }
    }

    login = async (email, password) => {
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new GraphQLError('Does not exist');
        }

        const isPasswordEquals = await bcrypt.compare(password, user.password);

        if (!isPasswordEquals) {
            throw new GraphQLError('Password is not right');
        }

        const userDto = new UserDto(user);
        const accessToken = await tokenService.generateToken({ ...userDto });

        return { accessToken, user: userDto }
    }

    getUser = async (id) => {
        const user = await UserModel.findById(id);

        if (!user) {
            throw new GraphQLError('Does not exist');
        }

        return user;
    }
}

export const userService = new UserService();
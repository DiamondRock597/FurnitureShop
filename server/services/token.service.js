import jwt from 'jsonwebtoken';
import { TokenModel } from '../models/token.model.js';

class TokenService {
    generateToken = async (payload) => {
        const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET);

        await this.saveToken(payload.id, token);

        return token;
    }

    saveToken = async (userId, accessToken) => {
        const tokenData = await this.findToken(userId);

        if (tokenData) {
            tokenData.accessToken = accessToken;
            return tokenData.save();
        }

        const token = await TokenModel.create({
            user: userId,
            accessToken
        });

        return token;
    }

    findToken = async (userId) => await TokenModel.findOne({ user: userId });
}

export const tokenService = new TokenService();
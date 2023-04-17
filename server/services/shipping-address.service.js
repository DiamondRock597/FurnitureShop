import { GraphQLError } from 'graphql';

import { ShippingAddressModel } from '../models/shipping-address.model.js';
import { UserModel } from "../models/user-model.js";

class ShippingAddressService {
    getList = async (userId) => {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new GraphQLError('Does not exist');
        }

        return user.shippingAddresses;
    }

    createAddress = async (userId, input) => {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new GraphQLError('Does not exist');
        }

        const shippingAddress = await ShippingAddressModel.create(input);

        user.shippingAddresses = [...user.shippingAddresses, shippingAddress];
        await user.save();
        return shippingAddress;
    }

    setActiveAddress = (addressId) => ShippingAddressModel.findByIdAndUpdate(addressId, { isActive: true });
}

export const shippingAddressService = new ShippingAddressService();
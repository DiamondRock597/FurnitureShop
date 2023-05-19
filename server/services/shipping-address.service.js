import { GraphQLError } from 'graphql';

import { ShippingAddressModel } from '../models/shipping-address.model.js';
import { ShippingAddressDto } from '../dto/shipping-address.dto.js';

class ShippingAddressService {
    getList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }
        const addresses = await ShippingAddressModel.find({ userId });
        return addresses.map(ShippingAddressDto.parse);
    }

    createAddress = async (userId, input) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        const address = await ShippingAddressModel.create({ ...input, userId });
        return address._id;
    }

    updateAddress = async(userId, input) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        const address = await ShippingAddressModel.findByIdAndUpdate(input.id, input, { new: true });
        return address._id;
    }
}

export const shippingAddressService = new ShippingAddressService();
import { GraphQLError } from 'graphql';

import { ShippingAddressModel } from '../models/shipping-address.model.js';

class ShippingAddressService {
    getList = async (userId) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        return ShippingAddressModel.find({ userId });
    }

    createAddress = async (userId, input) => {
        if (!userId) {
            throw new GraphQLError('Does not exist');
        }

        return ShippingAddressModel.create({ ...input, userId });
    }

    setActiveAddress = (addressId) => ShippingAddressModel.findByIdAndUpdate(addressId, { isActive: true });
}

export const shippingAddressService = new ShippingAddressService();
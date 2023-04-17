import { Schema, model } from 'mongoose';

const ShippingAddress = new Schema({
    address: { type: String, required: true },
    zipcode: { type: String, default: '' },
    name: { type: String, required: true },
    country: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    city: { type: String, required: true }
});

export const ShippingAddressModel = model('ShippingAddress', ShippingAddress);
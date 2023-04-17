import mongoose from 'mongoose';

const ShippingAddress = new mongoose.Schema({
    address: { type: String, required: true },
    zipcode: { type: String, default: '' },
    name: { type: String, required: true },
    country: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: false },
    city: { type: String, required: true }
});

export const ShippingAddressModel = mongoose.model('Shipping-Address', ShippingAddress);
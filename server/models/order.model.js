import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Payment', required: true },
    shippingAddressId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shipping-Address', required: true },
    totalAmount: { type: Number, required: true },
    quantity: { type: Number, required: true },
    status: { type: String, enum: ["Pending", "Delievered"], default: 'Pending' }
}, {
    timestamps: true
});

export const OrderModel = mongoose.model('Order', orderSchema); ``
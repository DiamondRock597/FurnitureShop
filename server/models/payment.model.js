import mongoose from 'mongoose';

const Payment = new mongoose.Schema({
    holderName: { type: String, required: true, },
    cardNumber: { type: String, required: true, min: 16, max: 16, trim: true },
    cvv: { type: String, required: true, min: 3, max: 3 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export const PaymentModel = mongoose.model('Payment', Payment);
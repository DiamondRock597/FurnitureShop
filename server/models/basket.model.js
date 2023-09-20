import mongoose from 'mongoose';

const basketSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ["Pending", "Submitted"], default: 'Pending' }
});

export const BasketModel = mongoose.model('Basket', basketSchema);
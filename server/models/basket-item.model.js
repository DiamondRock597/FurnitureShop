import mongoose from 'mongoose';

const basketItemSchema = mongoose.Schema({
    basketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Basket' },
    furniture: { type: mongoose.Schema.Types.ObjectId, ref: 'Furniture' },
    quantity: { type: Number, required: true }
});

export const BasketItemModel = mongoose.model('Basket-Item', basketItemSchema);
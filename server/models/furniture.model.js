import mongoose from 'mongoose';

const furnitureSchema = mongoose.Schema({
    name: { type: String, required: true },
    cost: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

export const FurnitureModel = mongoose.model('Furniture', furnitureSchema);
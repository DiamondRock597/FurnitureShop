import mongoose from 'mongoose';

const favouriteSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    furnitureId: { type: mongoose.Schema.Types.ObjectId, ref: 'Furniture' }
}, {
    timestamps: true
});

export const FavouriteModel = mongoose.model('Favourite', favouriteSchema);
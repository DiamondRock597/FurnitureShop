import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, min: 6, max: 16 },
    name: { type: String, required: false, default: '' },
});

export const UserModel = mongoose.model('User', UserSchema);
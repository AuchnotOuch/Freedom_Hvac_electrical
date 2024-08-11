// /models/User.js
import { Schema, model } from 'mongoose';
import pkg from 'bcryptjs';
const { genSalt, hash } = pkg;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' },
    createdAt: { type: Date, default: Date.now },
});

// Encrypt password before saving user
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
});

export default model('User', UserSchema);

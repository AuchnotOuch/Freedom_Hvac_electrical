// /models/Service.js
import { Schema, model } from 'mongoose';

const ServiceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default model('Service', ServiceSchema);

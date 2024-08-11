// /models/TeamMember.js
import { Schema, model } from 'mongoose';

const TeamMemberSchema = new Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    bio: { type: String },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default model('TeamMember', TeamMemberSchema);

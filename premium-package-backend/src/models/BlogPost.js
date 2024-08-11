// /models/BlogPost.js
import { Schema, model } from 'mongoose';

const BlogPostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    imageUrl: { type: String },
    createdAt: { type: Date, default: Date.now },
});

export default model('BlogPost', BlogPostSchema);

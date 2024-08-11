// /src/controllers/blogController.js
import BlogPost from '../models/BlogPost.js';

// Get all blog posts
export const getBlogPosts = async (req, res, next) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (err) {
        next(err);
    }
};

// Get a single blog post by ID
export const getBlogPostById = async (req, res, next) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id);
        if (!blogPost) return res.status(404).json({ message: 'Blog post not found' });
        res.json(blogPost);
    } catch (err) {
        next(err);
    }
};

// Create a new blog post
export const createBlogPost = async (req, res, next) => {
    try {
        const newBlogPost = new BlogPost(req.body);
        const savedBlogPost = await newBlogPost.save();
        res.status(201).json(savedBlogPost);
    } catch (err) {
        next(err);
    }
};

// Update a blog post by ID
export const updateBlogPost = async (req, res, next) => {
    try {
        const updatedBlogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedBlogPost) return res.status(404).json({ message: 'Blog post not found' });
        res.json(updatedBlogPost);
    } catch (err) {
        next(err);
    }
};

// Delete a blog post by ID
export const deleteBlogPost = async (req, res, next) => {
    try {
        const deletedBlogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!deletedBlogPost) return res.status(404).json({ message: 'Blog post not found' });
        res.json({ message: 'Blog post deleted' });
    } catch (err) {
        next(err);
    }
};

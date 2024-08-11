// /src/routes/blogRoutes.js
import express from 'express';
import {
    getBlogPosts,
    getBlogPostById,
    createBlogPost,
    updateBlogPost,
    deleteBlogPost
} from '../controllers/blogController.js';

const router = express.Router();

// GET /api/blogs - Get all blog posts
router.get('/', getBlogPosts);

// GET /api/blogs/:id - Get a single blog post by ID
router.get('/:id', getBlogPostById);

// POST /api/blogs - Create a new blog post
router.post('/', createBlogPost);

// PUT /api/blogs/:id - Update a blog post by ID
router.put('/:id', updateBlogPost);

// DELETE /api/blogs/:id - Delete a blog post by ID
router.delete('/:id', deleteBlogPost);

export default router;

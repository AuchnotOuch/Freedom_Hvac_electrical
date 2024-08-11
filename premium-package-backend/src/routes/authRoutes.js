// /src/routes/authRoutes.js
import express from 'express';
import { registerUser, loginUser, getCurrentUser } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/auth/register - Register a new user
router.post('/register', registerUser);

// POST /api/auth/login - Login a user
router.post('/login', loginUser);

// GET /api/auth/user - Get current user
router.get('/user', protect, getCurrentUser);

export default router;

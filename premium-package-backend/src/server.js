import express from 'express';
import connectDB from './config/db.js';
import serviceRoutes from './routes/serviceRoutes.js';
import teamRoutes from './routes/teamRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import authRoutes from './routes/authRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Connect to database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/services', serviceRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/auth', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../../premium-package-frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../../premium-package-frontend/build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

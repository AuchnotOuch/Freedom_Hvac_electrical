// /routes/serviceRoutes.js
import { Router } from 'express';
import { getServices, createService, deleteService } from '../controllers/serviceController.js';
const router = Router();

// GET /api/services
router.get('/', getServices);

// POST /api/services
router.post('/', createService);

// DELETE /api/services/:id
router.delete('/:id', deleteService);

export default router;

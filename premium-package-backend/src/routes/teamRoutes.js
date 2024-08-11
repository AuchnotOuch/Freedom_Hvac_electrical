// /src/routes/teamRoutes.js
import express from 'express';
import {
    getTeamMembers,
    getTeamMemberById,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
} from '../controllers/teamController.js';

const router = express.Router();

// GET /api/team - Get all team members
router.get('/', getTeamMembers);

// GET /api/team/:id - Get a single team member by ID
router.get('/:id', getTeamMemberById);

// POST /api/team - Create a new team member
router.post('/', createTeamMember);

// PUT /api/team/:id - Update a team member by ID
router.put('/:id', updateTeamMember);

// DELETE /api/team/:id - Delete a team member by ID
router.delete('/:id', deleteTeamMember);

export default router;

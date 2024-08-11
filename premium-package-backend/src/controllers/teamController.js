// /src/controllers/teamController.js
import TeamMember from '../models/TeamMember.js';

// Get all team members
export const getTeamMembers = async (req, res, next) => {
    try {
        const teamMembers = await TeamMember.find();
        res.json(teamMembers);
    } catch (err) {
        next(err);
    }
};

// Get a single team member by ID
export const getTeamMemberById = async (req, res, next) => {
    try {
        const teamMember = await TeamMember.findById(req.params.id);
        if (!teamMember) return res.status(404).json({ message: 'Team member not found' });
        res.json(teamMember);
    } catch (err) {
        next(err);
    }
};

// Create a new team member
export const createTeamMember = async (req, res, next) => {
    try {
        const newTeamMember = new TeamMember(req.body);
        const savedTeamMember = await newTeamMember.save();
        res.status(201).json(savedTeamMember);
    } catch (err) {
        next(err);
    }
};

// Update a team member by ID
export const updateTeamMember = async (req, res, next) => {
    try {
        const updatedTeamMember = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updatedTeamMember) return res.status(404).json({ message: 'Team member not found' });
        res.json(updatedTeamMember);
    } catch (err) {
        next(err);
    }
};

// Delete a team member by ID
export const deleteTeamMember = async (req, res, next) => {
    try {
        const deletedTeamMember = await TeamMember.findByIdAndDelete(req.params.id);
        if (!deletedTeamMember) return res.status(404).json({ message: 'Team member not found' });
        res.json({ message: 'Team member deleted' });
    } catch (err) {
        next(err);
    }
};

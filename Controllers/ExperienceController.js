import ExperienceGroup from '../models/ExperienceGroup.js';

// Create a new experience group
export const createExperienceGroup = async (req, res) => {
    try {
        const experienceGroup = new ExperienceGroup({ ...req.body, userId: req.user });
        await experienceGroup.save();
        res.status(201).json(experienceGroup);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all experience groups for a user
export const getExperienceGroups = async (req, res) => {
    try {
        const experienceGroups = await ExperienceGroup.find({ userId: req.user });
        res.json(experienceGroups);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an experience group
export const updateExperienceGroup = async (req, res) => {
    try {
        const experienceGroup = await ExperienceGroup.findById(req.params.id);
        if (!experienceGroup || experienceGroup.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Experience group not found' });
        }

        Object.assign(experienceGroup, req.body);
        await experienceGroup.save();
        res.json(experienceGroup);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an experience group
export const deleteExperienceGroup = async (req, res) => {
    try {
        const experienceGroup = await ExperienceGroup.findById(req.params.id);
        if (!experienceGroup || experienceGroup.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Experience group not found' });
        }

        await experienceGroup.remove();
        res.json({ message: 'Experience group deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

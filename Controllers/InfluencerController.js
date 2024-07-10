import Influencer from '../models/Influencer.js';

// Create a new influencer
export const createInfluencer = async (req, res) => {
    try {
        const influencer = new Influencer({ ...req.body, userId: req.user });
        await influencer.save();
        res.status(201).json(influencer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all influencers for a user
export const getInfluencers = async (req, res) => {
    try {
        const influencers = await Influencer.find({ userId: req.user });
        res.json(influencers);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update an influencer
export const updateInfluencer = async (req, res) => {
    try {
        const influencer = await Influencer.findById(req.params.id);
        if (!influencer || influencer.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Influencer not found' });
        }

        Object.assign(influencer, req.body);
        await influencer.save();
        res.json(influencer);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete an influencer
export const deleteInfluencer = async (req, res) => {
    try {
        const influencer = await Influencer.findById(req.params.id);
        if (!influencer || influencer.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Influencer not found' });
        }

        await influencer.remove();
        res.json({ message: 'Influencer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

import LiveCommerce from '../models/LiveCommerce.js';

// Create a new live commerce event
export const createLiveCommerce = async (req, res) => {
    try {
        const liveCommerce = new LiveCommerce({ ...req.body, userId: req.user });
        await liveCommerce.save();
        res.status(201).json(liveCommerce);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all live commerce events for a user
export const getLiveCommerces = async (req, res) => {
    try {
        const liveCommerces = await LiveCommerce.find({ userId: req.user });
        res.json(liveCommerces);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a live commerce event
export const updateLiveCommerce = async (req, res) => {
    try {
        const liveCommerce = await LiveCommerce.findById(req.params.id);
        if (!liveCommerce || liveCommerce.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Live commerce event not found' });
        }

        Object.assign(liveCommerce, req.body);
        await liveCommerce.save();
        res.json(liveCommerce);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a live commerce event
export const deleteLiveCommerce = async (req, res) => {
    try {
        const liveCommerce = await LiveCommerce.findById(req.params.id);
        if (!liveCommerce || liveCommerce.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Live commerce event not found' });
        }

        await liveCommerce.remove();
        res.json({ message: 'Live commerce event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

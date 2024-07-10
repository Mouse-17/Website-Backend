import Consignment from '../models/Consignment.js';

// Create a new consignment
export const createConsignment = async (req, res) => {
    try {
        const consignment = new Consignment({ ...req.body, userId: req.user });
        await consignment.save();
        res.status(201).json(consignment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all consignments for a user
export const getConsignments = async (req, res) => {
    try {
        const consignments = await Consignment.find({ userId: req.user });
        res.json(consignments);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a consignment
export const updateConsignment = async (req, res) => {
    try {
        const consignment = await Consignment.findById(req.params.id);
        if (!consignment || consignment.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Consignment not found' });
        }

        Object.assign(consignment, req.body);
        await consignment.save();
        res.json(consignment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a consignment
export const deleteConsignment = async (req, res) => {
    try {
        const consignment = await Consignment.findById(req.params.id);
        if (!consignment || consignment.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Consignment not found' });
        }

        await consignment.remove();
        res.json({ message: 'Consignment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

import Quotation from '../models/Quotation.js';

// Create a new quotation
export const createQuotation = async (req, res) => {
    try {
        const quotation = new Quotation({ ...req.body, userId: req.user });
        await quotation.save();
        res.status(201).json(quotation);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all quotations for a user
export const getQuotations = async (req, res) => {
    try {
        const quotations = await Quotation.find({ userId: req.user });
        res.json(quotations);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a quotation
export const updateQuotation = async (req, res) => {
    try {
        const quotation = await Quotation.findById(req.params.id);
        if (!quotation || quotation.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        Object.assign(quotation, req.body);
        await quotation.save();
        res.json(quotation);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a quotation
export const deleteQuotation = async (req, res) => {
    try {
        const quotation = await Quotation.findById(req.params.id);
        if (!quotation || quotation.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Quotation not found' });
        }

        await quotation.remove();
        res.json({ message: 'Quotation deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

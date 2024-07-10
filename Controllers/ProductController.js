import Product from '../models/Product.js';

// Create a new product
export const createProduct = async (req, res) => {
    try {
        const product = new Product({ ...req.body, userId: req.user });
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all products for a user
export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({ userId: req.user });
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product || product.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Product not found' });
        }

        Object.assign(product, req.body);
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product || product.userId.toString() !== req.user) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.remove();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import config from '../config.js';

// Register
export const registerAdmin = async (req, res) => {
    const { name, email, password, contact, isAdmin } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({ name, email, password, contact, isAdmin });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Login
export const loginAdmin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all users
export const getAllAdmin = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get user by ID
export const getAdminById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Update user
export const updateAdmin = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { name, email, contact, isAdmin } = req.body;
        user.name = name || user.name;
        user.email = email || user.email;
        user.contact = contact || user.contact;
        user.isAdmin = isAdmin || user.isAdmin;

        if (req.body.password) {
            user.password = req.body.password;
        }

        await user.save();
        res.json({ message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete user
export const deleteAdmin = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.remove();
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all TikTokers with their followers
export const getAllTiktokersWithFollowers = async (req, res) => {
    try {
        const tiktokers = await User.find().select('name email followers');
        res.json(tiktokers);
    } catch (error) {
        console.error(error); // In ra lỗi chi tiết
        res.status(500).json({ message: 'Server error' });
    }
};

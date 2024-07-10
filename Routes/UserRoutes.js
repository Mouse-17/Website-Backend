import express from 'express';
import { register, login, getAllUsers, getUserById, updateUser, deleteUser } from '../Controllers/UserController.js';

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// CRUD Operations
// Get all users
router.get('/', getAllUsers);

// Get user by ID
router.get('/:id', getUserById);

// Update user
router.put('/:id', updateUser);

// Delete user
router.delete('/:id', deleteUser);

export default router;

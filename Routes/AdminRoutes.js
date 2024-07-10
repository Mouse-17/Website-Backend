import express from 'express';
import { registerAdmin, loginAdmin, getAllAdmin, getAdminById, updateAdmin, deleteAdmin, getAllTiktokersWithFollowers } from '../Controllers/AdminController.js';
import protect from '../Middlewares/Auth.js';
import admin from '../Middlewares/IsAdmin.js';

const router = express.Router();

// Register
router.post('/register', registerAdmin);

// Login
router.post('/login', loginAdmin);

// CRUD Operations
// Get all admin
router.get('/', getAllAdmin);

// Get user by ID
router.get('/:id', getAdminById);

// Update user
router.put('/:id', updateAdmin);

// Delete user
router.delete('/:id', deleteAdmin);

router.get('/followers', getAllTiktokersWithFollowers);

export default router;

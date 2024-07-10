import express from 'express';
import { createConsignment, getConsignments, updateConsignment, deleteConsignment } from '../controllers/consignmentController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
    .post(protect, createConsignment)
    .get(protect, getConsignments);

router.route('/:id')
    .put(protect, updateConsignment)
    .delete(protect, deleteConsignment);

export default router;

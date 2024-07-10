import express from 'express';
import { createQuotation, getQuotations, updateQuotation, deleteQuotation } from '../Controllers/QuotationController.js';
import protect from '../Middlewares/Auth.js';

const router = express.Router();

router.route('/')
    .post(protect, createQuotation)
    .get(protect, getQuotations);

router.route('/:id')
    .put(protect, updateQuotation)
    .delete(protect, deleteQuotation);

export default router;

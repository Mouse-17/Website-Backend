import express from 'express';
import { createProduct, getProducts, updateProduct, deleteProduct } from '../Controllers/ProductController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
    .post(protect, createProduct)
    .get(protect, getProducts);

router.route('/:id')
    .put(protect, updateProduct)
    .delete(protect, deleteProduct);

export default router;

import express from 'express';
import { createLiveCommerce, getLiveCommerces, updateLiveCommerce, deleteLiveCommerce } from '../controllers/liveCommerceController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
    .post(protect, createLiveCommerce)
    .get(protect, getLiveCommerces);

router.route('/:id')
    .put(protect, updateLiveCommerce)
    .delete(protect, deleteLiveCommerce);

export default router;

import express from 'express';
import { createInfluencer, getInfluencers, updateInfluencer, deleteInfluencer } from '../controllers/influencerController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
    .post(protect, createInfluencer)
    .get(protect, getInfluencers);

router.route('/:id')
    .put(protect, updateInfluencer)
    .delete(protect, deleteInfluencer);

export default router;

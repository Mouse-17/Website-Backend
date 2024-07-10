import express from 'express';
import { createExperienceGroup, getExperienceGroups, updateExperienceGroup, deleteExperienceGroup }
    from '../Controllers/ExperienceController.js';
import protect from '../middlewares/auth.js';

const router = express.Router();

router.route('/')
    .post(protect, createExperienceGroup)
    .get(protect, getExperienceGroups);

router.route('/:id')
    .put(protect, updateExperienceGroup)
    .delete(protect, deleteExperienceGroup);

export default router;

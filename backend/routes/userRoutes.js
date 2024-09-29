import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getUsersForSidebar } from '../controllers/userController.js';

const router = express.Router();

// router.get('/:id', protectRoute, getUsersForSidebar)
router.get('/', protectRoute, getUsersForSidebar)

export default router;
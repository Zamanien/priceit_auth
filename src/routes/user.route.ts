import express from 'express';
import {
  deleteItemHandler,
  getAllUsersHandler,
  getMeHandler,
  addItemHandler,
} from '../controllers/user.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';
import { restrictTo } from '../middleware/restrictTo';

const router = express.Router();

router.use(deserializeUser, requireUser);

// Admin Get Users route
router.get('/', restrictTo('admin'), getAllUsersHandler);

// Get my info route
router.get('/me', getMeHandler);

router.put('/me/:userId', addItemHandler);
router.put('/me/:userId', deleteItemHandler);

export default router;
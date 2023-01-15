import express from 'express';
const router = express.Router();

// Import controllers
import {biodataCreate, biodataGet} from '../../controllers/biodata.js';
import { userGetMany } from '../../controllers/users.js';

// @route   Post api/biodata
// @desc    Post route for users biodata information
// @access  Protected

router.post('/biodata', biodataCreate);
router.get('/biodata', biodataGet);
router.get('/biodata/search', userGetMany);


export default router;
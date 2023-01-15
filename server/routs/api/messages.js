import express from "express";
const router = express.Router();

import {CreateMessage, GetMessage} from '../../controllers/messages.js';

// Create message 
router.post('/create', CreateMessage);
router.get('/list', GetMessage);

export default router;
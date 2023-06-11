import express from 'express';
import { signupGuru } from '../controllers/AccountController.js';

const accountRoutes = express.Router();

accountRoutes.post('/signup-teacher', signupGuru);

export default accountRoutes;
import express from 'express';
import { userSignUp } from '../Controller/userController.js';


const router = express.Router()

router.post('/signup' , userSignUp);

export default router ;
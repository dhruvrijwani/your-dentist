import express from 'express';
import { register, login } from '../controllers/authController.js'
import { uploadImage, getImages, deleteImage } from '../controllers/imageController.js';
import { upload } from '../config/multerConfig.js';

const router = express.Router();


router.post('/register', register)

router.post('/login', login)

router.post('/upload', upload.single('image'), uploadImage);

router.get('/images', getImages);

router.delete('/delete/:title', deleteImage);



export default router;
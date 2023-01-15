import express from "express";
import multer from 'multer';
import path from 'path';
import jwt_decode from "jwt-decode";
import User from "../../models/User.js";

// Conntrollers
import {Register, Login, Logout} from '../../controllers/auth.js';
import {GetUsers, GetUser, SetLike, GetLiked, RemoveUser, Uploadavatar, UploadImages, GetUserGallery, SetVerify} from '../../controllers/users.js';
import { nextTick } from "process";

// app.use(express.static('upload'));

// Middlewares
const router = express.Router();
const upload_folder = 'uploads/images/';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, upload_folder);
    },
    filename: (req, file, cb) => {
        const token = req.cookies.token;
        const _id = jwt_decode(token)._id;
        const fileExt = path.extname(file.originalname);
        const fileName = 'avatar'+_id;
        req.fileName = fileName+fileExt;
        req._id = _id;
        cb(null, fileName+fileExt);
    },
});

const storageGallery = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'uploads/gallery/');
    },
    filename: (req, file, cb) => {
        console.log("File ====== ", req.cookies);
        const token = req.cookies.token;
        const _id = jwt_decode(token)._id;
        const fileExt = path.extname(file.originalname);
        const fileName = _id+Date.now();
        req.fileName = fileName+fileExt;
        req._id = _id;
        cb(null, fileName+fileExt);
    },
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 200000000
    },
    fileFilter: (req, file, cb)=>{
        try{
            if(file.mimetype === ('image/png'||'image/jpg'||'image/jpeg')){
                cb(null, true);
            }else{
                console.log(file)
                cb("File format error", false);
            }
        }catch(err){
            console.log(err);
        }
    }
}).single('avatar');

const UploadGallery = multer({ 
    storage: storageGallery,
    limits: {
        fileSize: 200000000
    },
    fileFilter: (req, file, cb)=>{
        try{
            if(file.mimetype === ('image/png'||'image/jpg'||'image/jpeg')){
                cb(null, true);
            }else{
                console.log(file)
                cb("File format error", false);
            }
        }catch(err){
            console.log(err);
        }
    }
}).single('gallery');



// Create
// Res or Auth
router.post('/registration', Register);
router.post('/user/avatar', upload, Uploadavatar);
router.post('/user/gallery', UploadGallery, UploadImages);
// router.get('/uplads/images')
// app.use('/static', express.static('public'))
router.post('/login', Login);
router.get('/logout', Logout);


// Get users
router.get('/user/:id', GetUser);
router.get('/', GetUsers);

router.get('/liked', GetLiked);
router.get('/gallery', GetUserGallery);

// Update user
router.put('/like', SetLike);
router.put('/verify', SetVerify);
// router.put('/active/:id', );


// Remove user
router.delete('/user/:id', RemoveUser);

export default router;
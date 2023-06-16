import mongoose from 'mongoose';
import User from '../models/User.js';
import Gallery from '../models/Gallery.js';
import VerificationReport from '../models/VerificationReport.js';
import multer from 'multer';
import path from 'path';
import jwtDecode from 'jwt-decode';

const {ObjectId} = mongoose.Types;

// GetUsers
export const GetUsers = async (req, res)=>{
    // console.log(req.cookies.token);
    if (req.cookies.token) {
        const credential = jwtDecode(req.cookies.token);
        try {
            const self = await User.findById(credential._id);
            console.log(self);
            const users = await User.find({$and:[{_id: {$ne: credential._id}},{gender: {$ne: self.gender}}]});
            res.json(users);
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    } else {
        try {
            const users = await User.find();
            res.json(users);    
        } catch (err) {
            console.log(err);
            res.send(err)
        }
    }
}
export const GetRecentUsers = async (req, res)=>{
    // console.log(req.cookies.token);
    // if (req.cookies.token) {
    //     const credential = jwtDecode(req.cookies.token);
    //     try {
    //         const self = await User.findById(credential._id);
    //         console.log(self);
    //         const users = await User.find({$and:[{_id: {$ne: credential._id}},{gender: {$ne: self.gender}}]});
    //         res.json(users);
    //     } catch (err) {
    //         console.log(err);
    //         res.send(err)
    //     }
    // } else {
    //     try {
    //         const users = await User.find();
    //         res.json(users);    
    //     } catch (err) {
    //         console.log(err);
    //         res.send(err)
    //     }
    // }
    res.send("Hello recent!");
}


// GetUser
export const GetUser = async (req, res)=>{
    try {
        const user = await User.findById(req.params.id).exec();
        res.json(user);
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}
export const GetUserGallery = async (req, res)=>{
    try {
        const gallery = await Gallery.findOne({user: req.query.id});
        res.json(gallery);
    } catch (err) {
        console.log(err);
        res.send(err)
    }
}

// Get Liked
export const GetLiked = async (req, res) => {
    try {
        const user = await User.findById(req.query.user).exec();
        const likedProfiles = await User.find({
            '_id': { $in: user.liked.map(ObjectId) },
        });
        res.json(likedProfiles);
    } catch (err) {
        res.send(err);
    }
}
// Get searched
export const userGetMany = async (req, res) => {
    try {
        console.log("Res: ", req.query);
        const users = await User.find(req.query);
        console.log({
            src: "server",
            status: "Success",
            payload: req.query,
            users: users
        })

        res.json(users);
    } catch (err) {
        console.log("Error: User Get Many - ", err);
        res.json(err);
    }
}

// Remove user
export const RemoveUser = async (req, res) => {
    try {
        const response = await User.deleteOne({_id: req.params.id});
        console.log({
            id: req.params.id,
            response
        });
        res.send(response);
    } catch (err) {
        console.log("Delete Error");
        res.send({
            message: "Delete error",
            err
        })
    }
}

// Update user 
export const updateUser = async (_id, ) => {
    const result = await User.updateOne({_id, });
}

// Set Like
export const SetLike = async (req, res) =>{
    const result = await User.findOneAndUpdate({_id: req.body.user}, {"$push": {liked: req.body.like}});
    res.send(result);
}

// Set verified
export const SetVerify = async (req, res) =>{
    try {
        try {
            const result = await User.findByIdAndUpdate({_id: req.body.user},{
                status: req.body.status
            });
            console.log('User updated - ', result);
        } catch (error) {
            console.log(`Verification faild error: ${error}`)
        }
        const verify = await VerificationReport.create({
            user: req.body.user,
            message: req.body.message,
            findings: req.body.findings
        });
        res.json({
            result,
            verify
            // body: req.body
        });
    } catch (err) {
        console.log("Verification Error", err);
        res.send({
            message: "Verification error",
            err
        })
    }
}

// 
export const Uploadavatar = async (req, res) => {
    const result = await User.findOneAndUpdate({_id: req._id}, {avatar: req.fileName});
    console.log(result);
    res.send("req.file");
}

export const UploadImages = async(req, res)=>{
    try {
        const result = await Gallery.updateOne(
            {user: req._id},
            {
                $push:{
                    images: req.fileName
                },
            },
            {upsert: true}
        );
        res.json({
            msg: "Success!",
            res: result
        })
    } catch (err) {
        console.log("Gallery error: ", err);
        res.send(err);
    }
}

export const ShowImages = async(req, res)=>{
    
}
import mongoose from 'mongoose';
import Messages from '../models/Messages.js';
const {ObjectId} = mongoose.Types;

// create message
export const CreateMessage = async (req, res)=>{
    try {
        const message = new Messages(req.body);
        await message.save();
        res.json({
            staus: 200,
            message: "Success!",
            payload: message
        });
    } catch (err) {
        console.log("Message create error!");
        console.log(err);
        res.send({
            message: "Unsuccessful message sent!"
        });
    }
}

// get message
export const GetMessage = async (req, res) => {
    try {
        const messages = await Messages.find({
            receiver: req.query.user
        });
        res.send(messages);
    } catch (err) {
        console.log("Message get error:")
        console.log(err);
        res.send(err);
    }
}
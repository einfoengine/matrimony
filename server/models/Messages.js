import mongoose from "mongoose";
const {Schema} = mongoose;

const messageSchema = new Schema({
    sender: {
        type: mongoose.Types.ObjectId,
        // type: String,
        required: true
    },
    receiver: {
        type: mongoose.Types.ObjectId,
        // type: String,
        required: true
    },
    message: {
        type: String,
        rquired: true
    },
    status: Number
}, {timestamps: true});

const Message = mongoose.model('Message', messageSchema);

export default Message;
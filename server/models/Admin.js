import mongoose from "mongoose";
const {Schema}=mongoose;

const adminSchema = new Schema({
    status: {
        type: Boolean,
        default: false
    },
    user: {
        tyep: String, 
        default: 'admin',
    },
    pass: {
        type: String,
        default: '1234'
    }
})
import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  user_name: { type: String, required: true, unique: true},
  name: { type: String, required: true},
  avatar: { type: String},
  dob: { type: String, required: true},
  religion: { type: String, required: true},
  profession: {type: String},
  city: { type: String, required: true},
  phone_number: { type: String, unique: true, required: true},
  password: { type: String, required: true },
  gender: { type: String, required: true },
  nid: { type: String, required: true, unique: true },
  biodata: {type: String},
  liked: {
    type: Array
  },
  status: String,
  verification: { 
    type: mongoose.Types.ObjectId,
    ref: "VerificationReport"
  },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;
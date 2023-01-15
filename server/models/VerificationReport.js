import mongoose from 'mongoose';
const { Schema } = mongoose;

const VerificationSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User", 
    unique : true, 
    required: true
  },
  message: { 
    type: String, 
    required: true, 
  },
  findings: { 
    type: String, 
    required: true, 
  },
}, {timestamps: true});

const VerificationReport = mongoose.model('VerificationReport', VerificationSchema);

export default VerificationReport;
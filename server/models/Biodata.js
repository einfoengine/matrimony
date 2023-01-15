import mongoose from 'mongoose';
const { Schema } = mongoose;

const bioSchema = new Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User", 
    unique : true, 
    required:  true
  },
  present_address: { 
    type: String, 
    required: true, 
  },
  parmenent_address: { 
    type: String, 
    required: true, 
  },
  educaton: { 
    type: String,  
  },
  profession: { 
    type: String, 
    required: true, 
  },
  profession_type: { 
    type: String, 
    required: true, 
  },
  fathers_name: { 
    type: String, 
    required: true, 
  },
  fathers_profession: { 
    type: String, 
  },
  mothers_name: { 
    type: String, 
    required: true, 
  },
  mothers_profession: { 
    type: String, 
  },
  parents_profession: { 
    type: String
  },
  syblings: { 
    type: String, 
  },
  relative: { 
    type: String, 
  },
  seeking: {
    type: String,
  },
  about: { 
    type: String,
  },
}, {timestamps: true});

const Biodata = mongoose.model('Biodata', bioSchema);

export default Biodata;
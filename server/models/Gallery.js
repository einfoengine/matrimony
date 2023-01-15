import mongoose from 'mongoose';
const {Schema} =mongoose;

const gallerySchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    images: {
        type: [String],
        // validate: [6, '{PATH} exceeds the limit of 6']
    }
});

const Gallery = mongoose.model('Gallery', gallerySchema);

export default Gallery;
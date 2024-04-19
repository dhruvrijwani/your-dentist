import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
});

const Image = mongoose.model("Images", imageSchema);

export default Image;

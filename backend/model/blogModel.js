import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    beforeImage: {
        type: String,
        required: true
    },
    afterImage: {
        type: String,
        required: true
    }
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;

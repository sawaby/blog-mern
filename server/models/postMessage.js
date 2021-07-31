import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    Creator: String,
    tags: [String],
    selectFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
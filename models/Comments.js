import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema ({
    comment: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 250,
        trim: true
    },
    restaurant_id: {
        type: mongoose.Schema.Types.ObjectId
    }
});


const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
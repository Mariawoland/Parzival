import { Document, Schema, model, models } from "mongoose";

export interface IPost extends Document {
    _id: string;
    title: string;
    description?: string;
    imageUrl: string;
    url?: string;
}

const PostSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    url: { type: String }
})

const Post = models.Post || model('Post', PostSchema);

export default Post;
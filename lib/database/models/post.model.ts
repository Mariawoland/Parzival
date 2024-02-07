import { Document, Schema, model, models } from "mongoose";

export interface IPost extends Document {
    _id: string;
    date: string;
    title: string;
    titleEn: string;
    description1: string;
    description1En: string;
    imageUrl: string;
}

const PostSchema = new Schema({
    date: { type: String, required: true },
    title: { type: String, required: true },
    titleEn: { type: String, required: true },
    description1: { type: String },
    description1En: { type: String },
    imageUrl: { type: String, required: true },
})

const Post = models.Post || model('Post', PostSchema);

export default Post;
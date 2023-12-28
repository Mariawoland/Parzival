import { Document, Schema, model, models } from "mongoose";

export interface IProductEn extends Document {
    _id: string;
    userId: string;
    title: string;
    description?: string;
    imageUrl: string;
    price: string;
    url?: string;
    category: { _id: string, name: string }
}

const ProductEnSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
    price: { type: String },
    url: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
})

const ProductEn = models.ProductEn || model('ProductEn', ProductEnSchema);

export default ProductEn;
import { Document, Schema, model, models } from "mongoose";

export interface IProduct extends Document {
    _id: string;
    title: string;
    titleEn: string;
    description?: string;
    descriptionEn?: string;
    imageUrl: string;
    price: string;
    sold: string;
    soldEn: string;
    category: { _id: string, name: string }
}

const ProductSchema = new Schema({
    title: { type: String, required: true },
    titleEn: { type: String, required: true },
    description: { type: String },
    desctiptionEn: { type: String },
    imageUrl: { type: String, required: true },
    price: { type: String },
    sold: { type: String },
    soldEn: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category' }
})

const Product = models.Product || model('Product', ProductSchema);

export default Product;
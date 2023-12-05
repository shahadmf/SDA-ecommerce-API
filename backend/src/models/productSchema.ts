import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Product title must be at least 3 charecters long"],
    maxlength: [300, "Product title can not be more than 300 charecters long"],
  },
  slug: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  image: { type: String, required: false, trim: true },
  price: { type: Number, default: 0, required: true, trim: true },
  category: { type: String, required: false, trim: true },
  countInStock: { type: Number, default: 0, required: true, trim: true },
  sold: {
    type: Number,
    default: 0,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    minlength: [3, "Product title must be at least 3 charecters long"],
  },
  rating: { type: Number, default: 0, required: false, trim: true },
  numReviews: { type: Number, default: 0, required: false, trim: true },
});

export const Product = model("Product", productSchema);

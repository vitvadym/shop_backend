import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  category: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fullPrice: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  screen: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = model('Product', productSchema);

import { Schema, model } from 'mongoose';

const productDescriptionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: [String],
    required: true,
  },
});

const pruductDetailSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  namespaceId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  capacityAvailable: {
    type: [String],
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
  priceRegular: {
    type: Number,
    required: true,
  },
  priceDiscount: {
    type: Number,
    required: true,
  },
  colorsAvailable: {
    type: [String],
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  description: {
    type: [productDescriptionSchema],
    required: true,
  },
  screen: {
    type: String,
    required: true,
  },
  resolution: {
    type: String,
    required: true,
  },
  processor: {
    type: String,
    required: true,
  },
  ram: {
    type: String,
    required: true,
  },
  camera: {
    type: String,
  },
  zoom: {
    type: String,
  },
  cell: {
    type: [String],
  },
});

const Phone = model('Phone', pruductDetailSchema);
const Tablet = model('Tablet', pruductDetailSchema);
const Accessory = model('Accessory', pruductDetailSchema);

export { Phone, Tablet, Accessory };

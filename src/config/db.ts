import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const { DB_NAME, DB_USER, DB_PASS } = process.env;

const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.1jhtlp1.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('MongoDB connected 🚀');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;

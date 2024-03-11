import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import path from 'path';

import productsRouter from './routes/products.route';
dotenv.config();

connectDB();
const app = express();

const PORT = process.env.PORT || 4040;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);

app.use(express.static(path.join(path.resolve(), 'client', 'dist')));

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(path.resolve(), 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});

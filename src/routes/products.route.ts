import {
  getProducts,
  getProductById,
  getAllProducts,
} from '../controllers/product.controller';
import { Router } from 'express';

const router = Router();

router.get('/', getAllProducts);
router.get('/:category', getProducts);
router.get('/:category/:itemId', getProductById);

export default router;

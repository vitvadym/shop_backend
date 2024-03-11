import { Request, Response } from 'express';
import ProductService from '../services/product.service';

enum Category {
  PHONES = 'phones',
  TABLETS = 'tablets',
  ACCESSORIES = 'accessories',
}

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductService.getAllproducts();

    const totalPhonesCount = await ProductService.getTotalCount(
      Category.PHONES,
    );

    const totalTabletsCount = await ProductService.getTotalCount(
      Category.TABLETS,
    );

    const totalAccessoriesCount = await ProductService.getTotalCount(
      Category.ACCESSORIES,
    );

    return res.status(200).json({
      products,
      totalPhonesCount,
      totalTabletsCount,
      totalAccessoriesCount,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;

    const products = await ProductService.getProductsByParams({
      query: req.query,
      category,
    });

    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { itemId, category } = req.params;

    const singleProductDetail = await ProductService.getProductByIdDetails(
      itemId,
      category,
    );

    const singleProductBrief = await ProductService.getProductByIdBriefInfo(
      singleProductDetail?.id,
    );

    const similarProducts = await ProductService.getSimilarProductsBySpaceId(
      singleProductDetail?.namespaceId || '',
    );

    return res.status(200).json({
      singleProductDetail,
      similarProducts,
      singleProductBrief,
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

export { getProducts, getProductById, getAllProducts };

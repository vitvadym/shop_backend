import { SortOrder } from 'mongoose';
import { Product } from '../models/product.model';
import { Category } from '../types';
import { Phone, Accessory, Tablet } from '../models/product.detail.model';

interface QueryParams {
  order?: string;
  sort?: string;
  limit?: number;
  page?: number;
}

interface Args {
  query?: QueryParams;
  category?: string;
  itemId?: string;
  namespaceId?: string;
}

class ProductService {
  async getTotalCount(category: string) {
    return await Product.countDocuments({ category });
  }

  async getAllproducts() {
    return await Product.find();
  }

  async getProductsByParams({ query, category, namespaceId, itemId }: Args) {
    const { limit = 12, order = 'desc', page = 1, sort = 'year' } = query;

    return await Product.find({
      category: {
        $regex: category,
        $options: 'i',
      },

      itemId: {
        $regex: namespaceId || itemId || '',
        $options: 'i',
      },
    })
      .limit(+limit)
      .skip(+(page - 1) * +limit)
      .sort({ [sort]: order as SortOrder });
  }

  async getProductByIdDetails(itemId: string, category: string) {
    switch (category) {
      case Category.PHONES:
        return await Phone.findOne({ id: itemId });

      case Category.TABLETS:
        return await Tablet.findOne({ id: itemId });

      case Category.ACCESSORIES:
        return await Accessory.findOne({ id: itemId });
    }
  }

  async getProductByIdBriefInfo(itemId: string) {
    return await Product.findOne({ itemId });
  }

  async getSimilarProductsBySpaceId(spaceId: string) {
    return await Product.find({
      itemId: {
        $regex: spaceId,
        $options: 'i',
      },
    });
  }

  // async getProductsByCategory(category: string) {
  //   return await Product.find({ category });
  // }
}

export default new ProductService();

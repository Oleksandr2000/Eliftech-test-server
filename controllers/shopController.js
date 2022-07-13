import ShopModel from '../models/Shop.js';

export const getAllShop = async (req, res) => {
  try {
    const shops = await ShopModel.find();

    res.json(shops);
  } catch (error) {
    res.status(500).json(error);
  }
};

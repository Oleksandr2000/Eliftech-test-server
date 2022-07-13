import ItemModel from '../models/Item.js';

export const getItemsShop = async (req, res) => {
  try {

    const data = await ItemModel.find({ 'shop': req.params.itemsId });

    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};
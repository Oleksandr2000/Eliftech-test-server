import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    adress: {
      type: String,
      required: true,
    },
    order: {
      type: [],
    }
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('order', OrderSchema);

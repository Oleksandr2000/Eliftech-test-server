import OrderSchema from '../models/Order.js';

export const postOrderData = async (req, res) => {
    try {
        const doc = new OrderSchema({
            name: req.body.values.name,
            email: req.body.values.email,
            phone: req.body.values.phone,
            adress: req.body.values.adress,
            order: req.body.order
        });

        const order = await doc.save();

        res.status(200).json(order);

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}
const express = require("express");
const Client = require("./models/client");
const Product = require("./models/products");
const Order = require("./models/order");
const OrderItem = require("./models/orderItem");

const router = express.Router();

// Route pour ajouter un client
router.post("/clients", async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: "Error creating client" });
  }
});

// Route pour ajouter un produit
router.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: "Error creating product" });
  }
});

// Route pour créer une commande
router.post("/orders", async (req, res) => {
  const { clientId, items } = req.body;
  try {
    const order = await Order.create({ ClientId: clientId, totalAmount: 0 });

    let totalAmount = 0;
    for (const item of items) {
      const product = await Product.findByPk(item.productId);
      if (product) {
        const orderItem = await OrderItem.create({
          OrderId: order.id,
          ProductId: product.id,
          quantity: item.quantity,
          price: product.price * item.quantity,
        });
        totalAmount += orderItem.price;
      }
    }

    order.totalAmount = totalAmount;
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: "Error creating order" });
  }
});

module.exports = router;

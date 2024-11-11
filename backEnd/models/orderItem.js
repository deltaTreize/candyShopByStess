const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Product = require("./products");
const Order = require("./order");

const OrderItem = sequelize.define("orderItem", {
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
});

// Relation : une ligne de commande appartient à une commande et un produit
Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);
Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

module.exports = OrderItem;

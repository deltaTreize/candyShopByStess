const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Product = sequelize.define("Products", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: true },
  price: { type: DataTypes.FLOAT, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Product;

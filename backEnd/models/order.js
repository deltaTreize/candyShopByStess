const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const Client = require("./client");

const Order = sequelize.define("Order", {
  status: { type: DataTypes.STRING, defaultValue: "Pending" },
  totalAmount: { type: DataTypes.FLOAT, allowNull: false },
});

// Relation : Un client peut avoir plusieurs commandes
Client.hasMany(Order);
Order.belongsTo(Client);

module.exports = Order;

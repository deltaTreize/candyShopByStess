const sequelize = require("./database");
const Client = require("./models/client");
const Product = require("./models/products");
const Order = require("./models/order");
const OrderItem = require("./models/orderItem");

async function syncModels() {
  try {
    await sequelize.sync({ force: true }); // Force recrée les tables à chaque exécution
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Error synchronizing models:", error);
  }
}

syncModels();

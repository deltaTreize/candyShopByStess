const { Sequelize } = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "mysql",
});

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST);


async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connected to MySQL successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectDB();

module.exports = sequelize;

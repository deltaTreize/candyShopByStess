// app.js
const express = require("express");
const dbConnection = require("./database");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
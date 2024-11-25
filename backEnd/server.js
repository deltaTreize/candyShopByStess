const express = require("express");
const cors = require("cors");
const path = require("path"); 

const app = express();

app.use(cors());
app.use(express.json());

// Servir les fichiers statiques (images)
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/api", require("./routes.js"));




// **Démarrer le serveur**
app.listen(3001, () => {
	console.log("Server running on http://localhost:3001");
});

const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = new sqlite3.Database("./db.sqlite"); // Base de données SQLite locale

//Endpoint pour la connexion
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis." });
  }

  db.get(
    "SELECT * FROM clients WHERE email = ?",
    [email],
    async (err, user) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé." });
      }

      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({ error: "Mot de passe incorrect." });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY || "default-secret-key",
        { expiresIn: "1d" }
      );

      res.json({ token });
    }
  );
});

//Endpoint pour l'inscription
router.post("/register", async (req, res) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: "Email et mot de passe requis." });
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		db.run(
			"INSERT INTO clients (email, password) VALUES (?, ?)",
			[email, hashedPassword],
			function (err) {
				if (err) {
					if (err.code === "SQLITE_CONSTRAINT") {
						return res
							.status(400)
							.json({ error: "L'utilisateur existe déjà." });
					}
					return res.status(500).json({ error: err.message });
				}

				res
					.status(201)
					.json({ message: "Utilisateur enregistré avec succès." });
			}
		);
	} catch (err) {
		res.status(500).json({ error: "Erreur interne du serveur." });
	}
});

//Endpoint pour récupérer tous les produits
router.get("/products", (req, res) => {
	db.all("SELECT * FROM produits", (err, rows) => {
		if (err) {
			return res.status(500).json({ error: err.message });
		}
		res.json(rows);
	});
});


//Endpoint pour récupérer les produits avec le tag 'cup'
router.get("/products/cup", (req, res) => {
  const query = `SELECT * FROM produits WHERE tags LIKE ?`;
  db.all(query, [`%cup%`], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des produits:", err);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
    res.json(rows);
  });
});
//Endpoint pour récupérer les produits avec le tag 'gateau'
router.get("/products/cake", (req, res) => {
  const query = `SELECT * FROM produits WHERE tags LIKE ?`;
  db.all(query, [`%gateau%`], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des produits:", err);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
    res.json(rows);
  });
});
//Endpoint pour récupérer les produits avec le tag 'assortiment'
router.get("/products/box", (req, res) => {
  const query = `SELECT * FROM produits WHERE tags LIKE ?`;
  db.all(query, [`%assortiment%`], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des produits:", err);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
    res.json(rows);
  });
});
//Endpoint pour récupérer les produits avec le tag 'cones'
router.get("/products/cones", (req, res) => {
  const query = `SELECT * FROM produits WHERE tags LIKE ?`;
  db.all(query, [`%cones%`], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des produits:", err);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
    res.json(rows);
  });
});
//Endpoint pour récupérer les produits avec le tag 'brochette'
router.get("/products/brochette", (req, res) => {
  const query = `SELECT * FROM produits WHERE tags LIKE ?`;
  db.all(query, [`%brochette%`], (err, rows) => {
    if (err) {
      console.error("Erreur lors de la récupération des produits:", err);
      return res.status(500).json({ error: "Erreur interne du serveur" });
    }
    res.json(rows);
  });
});


module.exports = router;
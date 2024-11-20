const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
const db = new sqlite3.Database('./db.sqlite'); // Base de données SQLite locale

app.use(cors());
app.use(express.json());

// **Endpoint pour récupérer tous les produits**
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM produits', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// **Endpoint pour l'inscription**
app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      'INSERT INTO clients (email, password) VALUES (?, ?)',
      [email, hashedPassword],
      function (err) {
        if (err) {
          if (err.code === "SQLITE_CONSTRAINT") {
            return res.status(400).json({ error: "L'utilisateur existe déjà." });
          }
          return res.status(500).json({ error: err.message });
        }

        res.status(201).json({ message: "Utilisateur enregistré avec succès." });
      }
    );
  } catch (err) {
    res.status(500).json({ error: "Erreur interne du serveur." });
  }
});

// **Endpoint pour la connexion**
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis." });
  }

  db.get('SELECT * FROM clients WHERE email = ?', [email], async (err, user) => {
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
  });
});

// **Démarrer le serveur**
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const db = new sqlite3.Database('./db.sqlite'); // Utilisation d'une base de données SQLite locale

app.use(cors());
app.use(express.json());


// Endpoint pour récupérer tous les produits
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM produits', (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Démarrer le serveur
app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});

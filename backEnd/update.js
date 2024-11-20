const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

// Chemin vers ta base SQLite
const db = new sqlite3.Database('./db.sqlite');

// Liste des utilisateurs à mettre à jour avec leur mot de passe en clair
const usersToUpdate = [
  { lastName: 'LEBLOND', plainPassword: 'test1' },
  { lastName: 'GAIGNON', plainPassword: 'test2' },
];

(async () => {
  for (const user of usersToUpdate) {
    try {
      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(user.plainPassword, 10);

      // Mettre à jour la base de données
      db.run(
        'UPDATE clients SET password = ? WHERE lastName = ?',
        [hashedPassword, user.lastName],
        (err) => {
          if (err) {
            console.error(`Erreur lors de la mise à jour pour ${user.lastName}:`, err.message);
          } else {
            console.log(`Mot de passe pour ${user.lastName} mis à jour avec succès.`);
          }
        }
      );
    } catch (error) {
      console.error(`Erreur lors du hachage pour ${user.lastName}:`, error.message);
    }
  }

  // Fermer la base après mise à jour
  db.close((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la base:', err.message);
    } else {
      console.log('Mise à jour terminée et base fermée.');
    }
  });
})();

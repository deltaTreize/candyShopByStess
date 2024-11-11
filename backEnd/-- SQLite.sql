-- SQLite

-- INSERT INTO clients (
--         lastName,
--         firstName,
--         email,
--         adresse,
--         created_at
--         ) VALUES (
--             'GAIGNON',
--             'Stessy',
--             '',
--             '22 rue des hetres 86360 chasseuneuil du poitou',
--             1730201172
--             );

-- CREATE TABLE clients (
--   id INTEGER PRIMARY KEY AUTOINCREMENT,
--   lastName VARCHAR (50) NOT NULL,
--   firstName VARCHAR (50) NOT NULL,
--   email VARCHAR (50) NOT NULL UNIQUE,
--   adresse VARCHAR (150) NOT NULL,
--   created_at DATETIME
-- );

-- UPDATE clients SET lastName = 'LEBLOND' WHERE lastName = 'leblond';

-- DELETE FROM clients WHERE lastName = 'LEBLOND';

-- SELECT * FROM clients
-- WHERE lastName = 'LEBLOND';

-- ALTER TABLE clients ADD id INT;
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

// Render définit le port, sinon 3000 par défaut
const PORT = process.env.PORT || 3000;

// Configuration EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Fichiers statiques (CSS, Images, Manifest)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route pour le Service Worker (sw.js est à la racine)
app.get('/sw.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'sw.js'));
});

// ROUTE PRINCIPALE
app.get('/', (req, res) => {
    res.render('app'); // Cherche views/app.ejs
});

// Lancement du serveur
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur prêt sur le port ${PORT}`);
});

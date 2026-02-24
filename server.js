require('dotenv').config(); // Charge dotenv en premier
const express = require('express');
const path = require('path');
const app = express();

// Configuration pour Render (Port dynamique)
const PORT = process.env.PORT || 3000;

// Configuration d'EJS et des dossiers
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- TES ROUTES ---

// Route pour l'accueil
app.get('/', (req, res) => {
    res.render('index');
});

// Route pour l'app
app.get('/app', (req, res) => {
    res.render('app');
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Le serveur tourne sur le port ${PORT}`);
});

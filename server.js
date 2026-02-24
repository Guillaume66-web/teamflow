require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rendre le fichier sw.js accessible pour le mode mobile/PWA
app.get('/sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'sw.js'));
});

// ROUTE PRINCIPALE : Affiche ton application directement
app.get('/', (req, res) => {
    res.render('app'); // Utilise ton fichier views/app.ejs
});

// Route secondaire au cas où
app.get('/app', (req, res) => {
    res.render('app');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur prêt sur le port ${PORT}`);
});

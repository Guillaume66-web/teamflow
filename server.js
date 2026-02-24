const express = require('express');
const path = require('path');
const app = express();

// Configuration simplifiée
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Dossier public pour tes images et le manifest
app.use(express.static(path.join(__dirname, 'public')));

// Route principale vers ton fichier app.ejs
app.get('/', (req, res) => {
    res.render('app'); 
});

// Route pour le Service Worker
app.get('/sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'sw.js'));
});

// Port pour Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("Serveur TeamFlow en ligne !");
});

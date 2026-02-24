const express = require('express');
const path = require('path');
const app = express();

// Configuration des dossiers (Crucial pour Render)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Accès aux images et au manifest dans /public
app.use(express.static(path.join(__dirname, 'public')));

// Route principale : affiche ton appli
app.get('/', (req, res) => {
    res.render('app'); 
});

// Route pour le Service Worker (PWA)
app.get('/sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'sw.js'));
});

// Port dynamique pour Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log("TeamFlow est démarré !");
});

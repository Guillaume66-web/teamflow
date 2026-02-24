const express = require('express');
const path = require('path');
const app = express();

// Force le serveur à trouver le dossier 'views' là où il se trouve réellement
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Sert les fichiers du dossier 'public' (images, manifest)
app.use(express.static(path.join(__dirname, 'public')));

// Route pour l'accueil : on utilise le fichier app.ejs que tu as créé
app.get('/', (req, res) => {
  res.render('app'); 
});

// Route pour le sw.js à la racine
app.get('/sw.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'sw.js'));
});

// Port imposé par Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log('TeamFlow est en ligne !');
});

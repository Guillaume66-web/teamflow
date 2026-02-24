const express = require('express');
const path = require('path');
const app = express();

// Configuration du moteur de rendu (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Accès aux fichiers statiques (images, css)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route pour ton application mobile (PWA)
app.get('/sw.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'sw.js'));
});

// ROUTE PRINCIPALE : Affiche ton interface TeamFlow
app.get('/', (req, res) => {
    res.render('app'); // Cherche le fichier views/app.ejs
});

// Port définit par Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

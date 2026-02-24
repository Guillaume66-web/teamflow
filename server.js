require('dotenv').config();
const express = require('express');
const Datastore = require('nedb');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const path = require('path');
const app = express();

// --- BASES DE DONNÉES ---
const db = {};
db.matches = new Datastore({ filename: 'database/matches.db', autoload: true });

// --- CONFIGURATION ---
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // C'est ici que tu mettras logo-horizontal.png et icon-512.png

// --- ROUTES ---

// Accueil (index.ejs)
app.get('/', (req, res) => {
    res.render('index');
});

// Connexion
app.post('/login', (req, res) => {
    const { teamCode, role } = req.body;
    if (role === 'coach' && teamCode === 'COACH2026') {
        res.redirect('/dashboard?auth=coach');
    } else {
        res.redirect('/dashboard?auth=public');
    }
});

// Dashboard (app.ejs)
app.get('/dashboard', (req, res) => {
    const userRole = req.query.auth || 'public';
    db.matches.find({}).sort({ timestamp: -1 }).exec((err, allMatches) => {
        res.render('app', { 
            role: userRole, 
            matches: allMatches,
            stripePublicKey: process.env.STRIPE_PUBLIC_KEY 
        });
    });
});

// Ajout de match (Coach uniquement)
app.post('/add-match', (req, res) => {
    const { date, opponent, location } = req.body;
    db.matches.insert({ date, opponent, location, score: "VS", timestamp: Date.now() }, () => {
        res.redirect('/dashboard?auth=coach');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TEAMFLOW actif sur le port ${PORT}`));
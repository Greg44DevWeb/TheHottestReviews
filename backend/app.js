const express = require('express');



//importation du router
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/users');
//installation du package dotenv (variables d'environnement)
require('dotenv').config();

// initialisation de Helmet pour sécuriser les headers uttilisés par Express
const helmet = require('helmet');

// importation de npm-Cors
const cors = require('cors');
// Importation du path (accés au path du server)
const path = require('path');
// importation package mongoose
const mongoose = require('mongoose');



mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Methode Express
const app = express();
app.use(helmet());
app.use(cors());


// gestion des parametres CORS - requète AJAX interdites
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json());//extrait le corps JSON du frontend


app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
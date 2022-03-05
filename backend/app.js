const express = require('express');

const app = express();

//importation du router
const sauceRoutes = require('./routes/sauces');
const userRoutes = require('./routes/users');

const path = require('path');
// importation package mongoose
const mongoose = require('mongoose');



app.use(express.json()); //extrait le corps JSON du frontend


mongoose.connect('mongodb+srv://gregDevWeb44:Cadran370832@cluster0.jdwzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// importation des paramètres CORS - requète AJAX interdites
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;
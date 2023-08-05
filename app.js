require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./database/connexionDB");
const morgan = require("morgan");
const langueRouter = require('./routes/langueRoute');
const utilisateurRouter = require('./routes/utilisateurRoute');
const lieu_imageRouter = require('./routes/lieu_imageRoute');
const authRoute = require('./routes/authRoute');
const lieuRoute = require('./routes/lieuRoute');
const notificationRoute = require('./routes/notificationRoute');
const lieu_htmlRoute =require('./routes/lieu_htmlRoute');
const favorisRoute =require('./routes/favorisRoute');
const lieu_videoRoute = require('./routes/lieu_videoRoute');
const imageRoute = require('./routes/imageRoute');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");

  next();
});

app.use('/uploads', express.static('uploads'));
app.use('/lieu',lieuRoute);
app.use('/langues',langueRouter);
app.use('/utilisateur',utilisateurRouter);
app.use('/lieu_image',lieu_imageRouter);
app.use('/lieu_video',lieu_videoRoute);
app.use('/auth',authRoute);
app.use('/notification',notificationRoute);
app.use('/lieu_html',lieu_htmlRoute);
app.use('/favoris',favorisRoute);
app.use('/explore',imageRoute);

app.use((req, res, next) => {
    res.status(404).send({statue : "ko", message: "Route introuvable"})
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion à la base de données établie avec succès.");
    return sequelize.sync({ logging: console.log });
  })
  .then(() => {
    console.log("Les modèles sont synchronisés avec la base de données.");

    app.listen(5000, () => {
      console.log(`Le serveur s'exécute sur le port 5000`);
    });
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la connexion à la base de données ou de la synchronisation des modèles :",
      error
    );
  });
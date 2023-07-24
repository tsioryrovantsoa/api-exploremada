require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./database/connexionDB");
const morgan = require("morgan");
const langueRouter = require('./routes/langueRoute');

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

app.use('/langues',langueRouter);

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

    app.listen(process.env.PORT, () => {
      console.log(`Le serveur s'exécute sur le port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(
      "Erreur lors de la connexion à la base de données ou de la synchronisation des modèles :",
      error
    );
  });
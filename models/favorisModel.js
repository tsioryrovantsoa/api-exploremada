const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const FavorisModel = sequelize.define(
  "favoris",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    id_lieu: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique:false,
      validate: {
        notNull: {
          msg: "Le champ id_lieu est obligatoire"
        },
        notEmpty: {
          msg: "Le champ id_lieu ne doit pas etre vide"
        },
      }
    },
    id_utilisateur: {
        allowNull: false,
        type: DataTypes.INTEGER,
        unique:false,
        validate: {
          notNull: {
            msg: "Le champ id_utilisateur est obligatoire"
          },
          notEmpty: {
            msg: "Le champ id_utilisateur ne doit pas etre vide"
          },
      },
  }
},
{
    tableName: "favoris",
    timestamps: false,
  }
);

module.exports = FavorisModel;
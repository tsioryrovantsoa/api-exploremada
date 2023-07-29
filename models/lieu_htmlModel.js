const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const Lieu_htmlModel = sequelize.define(
  "lieu_html",
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
    html: {
        allowNull: false,
        type: DataTypes.STRING,
        unique:false,
        validate: {
          notNull: {
            msg: "Le champ html est obligatoire"
          },
          notEmpty: {
            msg: "Le champ html ne doit pas etre vide"
          },
      },
  }
},
{
    tableName: "lieu_html",
    timestamps: false,
  }
);

module.exports = Lieu_htmlModel;
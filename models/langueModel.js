const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const LangueModel = sequelize.define(
  "langue",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nom: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique:true,
      validate: {
        notNull: {
          msg: "Le champ nom est obligatoire"
        },
        notEmpty: {
          msg: "Le champ nom ne doit pas etre vide"
        },
      }
    },
  },
  {
    tableName: "langue",
    timestamps: false,
  }
);

module.exports = LangueModel;
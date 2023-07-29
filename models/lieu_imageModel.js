const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const Lieu_imageModel = sequelize.define(
  "lieu_image",
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
    image: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique:false,
        validate: {
          notNull: {
            msg: "Le champ image est obligatoire"
          },
          notEmpty: {
            msg: "Le champ image ne doit pas etre vide"
          },
      },
  }
},
{
    tableName: "lieu_image",
    timestamps: false,
  }
);

module.exports = Lieu_imageModel;
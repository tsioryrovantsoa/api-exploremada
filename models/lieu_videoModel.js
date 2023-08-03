const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const Lieu_videoModel = sequelize.define(
  "lieu_video",
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
    video: {
        allowNull: false,
        type: DataTypes.STRING(50),
        unique:false,
        validate: {
          notNull: {
            msg: "Le champ video est obligatoire"
          },
          notEmpty: {
            msg: "Le champ video ne doit pas etre vide"
          },
      },
  }
},
{
    tableName: "lieu_video",
    timestamps: false,
  }
);

module.exports = Lieu_videoModel;
const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const Video_LibView = sequelize.define(
  "vue_video",
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
  },
  nom: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  description_courte: {
    allowNull: true,
    type: DataTypes.TEXT,
  },
  image_miniature: {
    allowNull: true,
    type: DataTypes.STRING(50),
  },
  id_type_lieu: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  id_ville: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  nom_ville: {
    allowNull: true,
    type: DataTypes.STRING(50),
  }
},
{
    tableName: "vue_video",
    timestamps: false,
  }
);

module.exports = Video_LibView;
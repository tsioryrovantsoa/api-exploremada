const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const ImageModel = sequelize.define(
  "vue_image",
  {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
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
    tableName: "vue_image",
    timestamps: false,
  }
);

module.exports = ImageModel;
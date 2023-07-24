const { DataTypes , QueryTypes } = require("sequelize");
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
      
    },
  },
  {
    tableName: "langue",
    timestamps: false,
  }
);

module.exports = LangueModel;
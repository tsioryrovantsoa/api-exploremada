const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const notificationModel = sequelize.define(
  "notification",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_utilisateur : {
        allowNull: true,
        type: DataTypes.INTEGER,
    },
    contenu : {
        allowNull: true,
        type: DataTypes.TEXT,
    }
  },
  {
    tableName: "notification",
    timestamps: false,
  }
);

module.exports = notificationModel;
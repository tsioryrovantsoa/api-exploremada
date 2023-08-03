const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const LieuModel = sequelize.define(
  "lieu",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    description_longue: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    description_courte: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image_miniature: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    latitude: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    longitude: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    heure_ouverture: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    frais_entree: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    remarque_frais_entree: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    contact: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    autres_informations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    id_type_lieu: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    id_ville: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    is_populaire: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
    },
    id_utilisateur: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    heure_fermeture: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    remarque_horaire: {
      type: DataTypes.STRING(100),
      allowNull: true,
    }
  },
  {
    tableName: "lieu",
    timestamps: false,
  }
);

module.exports = LieuModel;

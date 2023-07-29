const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");

const Lieu_libModel = sequelize.define(
  "lieu_lib",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    description_longue: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    description_courte: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    image_miniature: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    latitude: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    longitude: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    heure_ouverture: {
      allowNull: true,
      type: DataTypes.TIME,
    },
    frais_entree: {
      allowNull: true,
      type: DataTypes.DECIMAL(10, 2),
    },
    remarque_frais_entree: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    contact: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    autres_informations: {
      allowNull: true,
      type: DataTypes.TEXT,
    },
    id_type_lieu: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    id_ville: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    is_populaire: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    id_utilisateur: {
      allowNull: true,
      type: DataTypes.INTEGER,
    },
    heure_fermeture: {
      allowNull: true,
      type: DataTypes.TIME,
    },
    remarque_horaire: {
      allowNull: true,
      type: DataTypes.STRING(100),
    },
    nom_utilisateur: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    nom_typelieu: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
    nom_ville: {
      allowNull: true,
      type: DataTypes.STRING(50),
    },
  },
  {
    tableName: "lieu_lib",
    timestamps: false,
  }
);

module.exports = Lieu_libModel;

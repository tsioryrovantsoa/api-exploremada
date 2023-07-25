const { DataTypes } = require("sequelize");
const sequelize = require("../database/connexionDB");
const utilisateurModel = sequelize.define(
  "utilisateur",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    nom: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique:false,
      validate: {
        notNull: {
          msg: "Le champ nom est obligatoire"
        },
        notEmpty: {
          msg: "Le champ nom ne doit pas etre vide"
        },
      }
    },
    
    email: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true, 
      validate: {
        notNull: {
          msg: "Le champ email est obligatoire"
        },
        notEmpty: {
          msg: "Le champ email ne doit pas être vide"
        },
        isEmail: {
          msg: "Le champ email doit être une adresse email valide"
        }
      }
    },
    
    motdepasse: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique:false,
      validate: {
        notNull: {
          msg: "Le  mot de passe est obligatoire"
        },
        notEmpty: {
          msg: "Le champ mot de passe ne doit pas etre vide"
        },
      }
    },
    
    id_langue: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique:false,
      validate: {
        notNull: {
          msg: "langue est obligatoire"
        },
        notEmpty: {
          msg: "langue ne doit pas etre vide"
        },
      }
    },
    contact: {
      allowNull: true,
      type: DataTypes.STRING(50),
      validate: {
        isPhoneNumber: function (value) {
          if (!/^[0-9]{10}$/.test(value)) {
            throw new Error('Le champ contact doit être un numéro de téléphone valide (10 chiffres sans espaces).');
          }
        }
      }
    }
  },


  {
    tableName: "utilisateur",
    timestamps: false,
  }
);

module.exports = utilisateurModel;
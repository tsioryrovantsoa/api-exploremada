const bcrypt = require('bcryptjs');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://username:password@localhost:3306/database_name');

const userSchema = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  confirmPassword: {
    type: DataTypes.STRING,
    allowNull: false
  }
});
// Synchronisation avec la base de données
(async () => {
  try {
    await sequelize.sync();
    console.log('Table "Users" créée avec succès.');
  } catch (error) {
    console.error('Erreur lors de la création de la table "Users":', error);
  }
})();
//micheck hoe mi-existe ve ilay mail, ary true ve ilay mdp
userSchema.statics.checkUser = async(userData, password) =>{
    if(!userData) {
        console.log('[INFO] **************Email invalide**********');
        throw new Error ('Erreur de login: Email non reconnue');
    }
    console.log('[INFO] email :'+userData.email);
    //micompare le mdp @n'ilay mdp crypté   anaty base
    const isPasswordValid = await bcrypt.compare(password,userData.password);
         if (!isPasswordValid){
            console.log('[INFO] **************password invalide**********');
            res.status(403).json({ message :'Erreur de login: mot de passe eronnée'});
            throw new Error ('Erreur de login: mot de passe eronnée');s
        }
            
           
         console.log('[INFO] valid password,connexion....');
         
    return userData;//mireturn datauser rehefa vrai daholo
}


userSchema.pre('save',function(){
    console.log('[INFO] CRYPTAGE MotDePasse');
    if(this.isModified('password')) this.password =  bcrypt.hashSync(this.password,8);
    if(this.isModified('confirmPassword')) this.confirmPassword =  bcrypt.hashSync(this.confirmPassword,8);
    console.log('[INFO] cryptage réussi');
    return 0;
});


module.exports = userSchema;
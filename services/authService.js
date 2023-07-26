const utilisateurModel = require("../models/utilisateurModel")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const blacklistedTokens = new Set();
class AuthService{

    signIn = async(email, motdepasse) => {
        const user = await utilisateurModel.findOne({where : {email}});
        if(!user){
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(motdepasse, user.motdepasse);
        if(!isPasswordValid){
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
            expiresIn: process.env.EXPIRE_TOKEN, 
          });
      
        return token;
    }
    signOut = async(token) => {
        blacklistedTokens.add(token);
    }

    isTokenBlacklisted = (token) => {
        return blacklistedTokens.has(token);
    }

}

module.exports = AuthService;
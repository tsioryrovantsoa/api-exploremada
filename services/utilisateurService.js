const bcrypt = require('bcrypt');
const utilisateurModel = require("../models/utilisateurModel");
class UtilisateurService{

    create = async(data) => {
        try {
            const { motdepasse,confirmmdp } =data;

            if (motdepasse != confirmmdp){
                throw new Error("les mots de passe ne sont pas identiques ")
            }

            data.motdepasse=await bcrypt.hash(motdepasse, 10);
            const newutilisateur = await utilisateurModel.create(data);
            
            return newutilisateur;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = UtilisateurService;
const bcrypt = require('bcrypt');
const UtilisateurModel = require("../models/utilisateurModel");
class UtilisateurService{

    create = async(data) => {
        try {
            const { motdepasse,confirmmdp } =data;

            if (motdepasse != confirmmdp){
                throw new Error("les mots de passe ne sont pas identiques ")
            }

            data.motdepasse=await bcrypt.hash(motdepasse, 10);
            const newutilisateur = await UtilisateurModel.create(data);
            
            return newutilisateur;
        } catch (error) {
            throw error;
        }
    }
    getAll = async() =>{
        try{
            return await UtilisateurModel.findAll();
        }catch(error){
            throw error;
        }
    }

        getById = async(id) =>{
        try{
            return await UtilisateurModel.findByPk(id);
        }catch(error){
            throw error;
        }
    }


    update = async(data,id) => {
        try{
            const utilisateur = await UtilisateurModel.findByPk(id);
            if(!utilisateur) throw new Error("user not found");
            for (const key in data) {
                if (key in utilisateur) {
                  utilisateur[key] = data[key];
                }
              }
            await utilisateur.save();
            return utilisateur;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deleteutilisateur = await UtilisateurModel.destroy({ where: { id }});
            if (deleteutilisateur){
                return true
            } else{
                throw new Error("user not found");
            }
        } catch (error) {
            throw error
        }
    }

}

module.exports = UtilisateurService;
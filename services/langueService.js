const LangueModel = require("../models/langueModel");

class LangueService{

    getAll = async() =>{
        try{
            return await LangueModel.findAll();
        }catch(error){
            throw error;
        }
    }

    create = async(data) => {
        try {
            if(!data.nom) throw new Error("Champ obligatoire");
            const langue = await LangueModel.findOne({
                where: {
                    nom : data.nom
                }
            });
            if(langue) throw new Error('Le nom existe deja');
            const newlangue = await LangueModel.create(data);
            return newlangue;
        } catch (error) {
            throw error;
        }
    }

    update = async(data,id) => {
        try{
            if(!data.nom) throw new Error("Champ obligatoire");
            const verify_langue = await LangueModel.findOne({
                where: {
                    nom : data.nom
                }
            });
            if(verify_langue) throw new Error('Le nom existe deja');
            const langue = await LangueModel.findByPk(id);
            if(!langue) throw new Error("Salle not found")
            langue.nom = data.nom;
            await langue.save();
            return langue;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deletelangue = await LangueModel.destroy({ where: { id }});
            if (deletelangue){
                return true
            } else{
                throw new Error("langue not found");
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = LangueService;
const LieuModel = require("../models/lieuModel");


class LieuService{

    getAll = async() =>{
        try{
            return await LieuModel.findAll();
        }catch(error){
            throw error;
        }
    }

    create = async(data) => {
        try {
            if(!data.image_miniature){
                throw new Error("L'image est requise pour l'ajout d'un lieu.");
              }
            const newlieu = await LieuModel.create(data);
            return newlieu;
        } catch (error) {
            throw error;
        }
    }

    update = async(data,id) => {
        try{
            console.log(data);
            if(!data.image_miniature){
                delete data.image_miniature;
              }
            const lieu = await LieuModel.findByPk(id);
            if(!lieu) throw new Error("Lieu not found");
            Object.assign(lieu,data);
            // lieu.nom = data.nom;
            await lieu.save();
            return lieu;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deletelieu = await LieuModel.destroy({ where: { id }});
            if (deletelieu){
                return true
            } else{
                throw new Error("lieu not found");
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = LieuService;
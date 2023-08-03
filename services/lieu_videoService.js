const Lieu_videoModel = require("../models/lieu_videoModel");

class Lieu_videoService{

    getAll = async() =>{
        try{
            return await Lieu_videoModel.findAll();
        }catch(error){
            throw error;
        }
    }

    getByIdLieu = async(id) =>{
        try{
            return await Lieu_videoModel.findAll({
                where: { id_lieu: id },
            });
        }catch(error){
            throw error;
        }
    }


    create = async(data) => {
        try {
            if(!data.video){
                throw new Error("Le video est requise pour l'ajout d'un lieu.");
              }
            const newlieu_video = await Lieu_videoModel.create(data);
            return newlieu_video;
        } catch (error) {
            throw error;
        }
    }

    update = async(data,id) => {
        try{
            if(!data.video){
                delete data.video;
              }
            const lieu_video = await Lieu_videoModel.findByPk(id);
            if(!lieu_video) throw new Error("lieu_video not found");
            for (const key in data) {
                if (key in lieu_video) {
                  lieu_video[key] = data[key];
                }
              }
            await lieu_video.save();
            return lieu_video;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deletelieu_video = await Lieu_videoModel.destroy({ where: { id }});
            if (deletelieu_video){
                return true
            } else{
                throw new Error("lieu_video not found");
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = Lieu_videoService;
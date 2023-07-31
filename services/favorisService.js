const FavorisModel = require("../models/favorisModel");

class FavorisService{

    getAll = async() =>{
        try{
            return await FavorisModel.findAll();
        }catch(error){
            throw error;
        }
    }
        getByUser = async(id_utilisateur) =>{
        try{
            return await FavorisModel.findAll({
                where: { id_utilisateur: id_utilisateur },
            });
        }catch(error){
            throw error;
        }
    }


    create = async(data) => {
        try {
            const newfavoris = await FavorisModel.create(data);
            return newfavoris;
        } catch (error) {
            throw error;
        }
    }

    update = async(data,id) => {
        try{
            const favoris = await FavorisModel.findByPk(id);
            if(!favoris) throw new Error("favoris not found");
            for (const key in data) {
                if (key in favoris) {
                  favoris[key] = data[key];
                }
              }
            await favoris.save();
            return favoris;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deletefavoris = await FavorisModel.destroy({ where: { id }});
            if (deletefavoris){
                return true
            } else{
                throw new Error("favoris not found");
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = FavorisService;
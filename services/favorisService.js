const FavorisModel = require("../models/favorisModel");
const db = require("../database/connexionDB");
const { QueryTypes } = require('sequelize');
class FavorisService{

    getAll = async() =>{
        try{
            return await FavorisModel.findAll();
        }catch(error){
            throw error;
        }
    }

    getMyFavorites = async(id_utilisateur) => {
        try {
            const favoris = await db.query(
                `SELECT ll.id, ll.nom, ll.description_courte, ll.image_miniature, ll.id_type_lieu, ll.nom_typelieu, ll.id_ville, ll.nom_ville, ll.is_populaire
                 FROM lieu_lib ll
                 JOIN favoris f ON ll.id = f.id_lieu
                 WHERE f.id_utilisateur = :id_utilisateur`,
                {
                  type: QueryTypes.SELECT,
                  replacements: { id_utilisateur },
                }
              );
            return favoris;
        } catch (error) {
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

    delete = async(data,id_utilisateur)=>{
        try {
            const id_lieu = data.id_lieu;
            const deletefavoris = await FavorisModel.destroy({ where: { id_lieu, id_utilisateur }});
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
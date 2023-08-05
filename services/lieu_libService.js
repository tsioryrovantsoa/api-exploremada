const Lieu_libModel = require("../models/lieu_libView");
const { Op,Sequelize } = require("sequelize");

class Lieu_libService{

    getAll = async(query) =>{
        const { q, id_type_lieu, id_ville, order } = query;
        const filters = {};
        
        if (q) {
            filters[Op.or] = [
            { nom: { [Op.like]: `%${q}%` } },
            { nom_typelieu: { [Op.like]: `%${q}%` } },
            { nom_ville: { [Op.like]: `%${q}%` } },
            ];
        }
        
        if (id_type_lieu) {
            filters.id_type_lieu = id_type_lieu;
        }
        
        if (id_ville) {
            filters.id_ville = id_ville;
        }

        try {
            const options = {
            attributes: ["id", "nom", "description_courte", "image_miniature", "id_type_lieu", "nom_typelieu", "id_ville", "nom_ville", "is_populaire"],
            };

            if (filters) {
            options.where = filters;
            }
            
            if (order) {
                options.order = [Sequelize.literal(order)];
            }else{
                options.order = Sequelize.literal('RAND()');
            }

            const lieux = await Lieu_libModel.findAll(options);
            return lieux;
        } catch (error) {
            throw error;
        }
    }

    getById = async(id) => {
        try{
            return await Lieu_libModel.findByPk(id);
        }catch(error){
            throw error;
        }
    }
}

module.exports = Lieu_libService;
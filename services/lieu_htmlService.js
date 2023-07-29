const Lieu_htmlModel = require("../models/lieu_htmlModel");

class Lieu_htmlService{

    getAll = async() =>{
        try{
            return await Lieu_htmlModel.findAll();
        }catch(error){
            throw error;
        }
    }

    create = async(data) => {
        try {
            const newlieu_html = await Lieu_htmlModel.create(data);
            return newlieu_html;
        } catch (error) {
            throw error;
        }
    }

    update = async(data,id) => {
        try{
            const lieu_html = await Lieu_htmlModel.findByPk(id);
            if(!lieu_html) throw new Error("lieu_html not found");
            for (const key in data) {
                if (key in lieu_html) {
                  lieu_html[key] = data[key];
                }
              }
            await lieu_html.save();
            return lieu_html;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deletelieu_html = await Lieu_htmlModel.destroy({ where: { id }});
            if (deletelieu_html){
                return true
            } else{
                throw new Error("lieu_html not found");
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = Lieu_htmlService;
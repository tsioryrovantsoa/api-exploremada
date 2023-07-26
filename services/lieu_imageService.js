const Lieu_imageModel = require("../models/lieu_imageModel");

class Lieu_imageService{

    getAll = async() =>{
        try{
            return await Lieu_imageModel.findAll();
        }catch(error){
            throw error;
        }
    }

    create = async(data) => {
        try {
            const newlieu_image = await Lieu_imageModel.create(data);
            return newlieu_image;
        } catch (error) {
            throw error;
        }
    }

    update = async(data,id) => {
        try{
            const lieu_image = await Lieu_imageModel.findByPk(id);
            if(!lieu_image) throw new Error("lieu_image not found");
            for (const key in data) {
                if (key in lieu_image) {
                  lieu_image[key] = data[key];
                }
              }
            await lieu_image.save();
            return lieu_image;
        }catch(error){
            throw error;
        }
    }

    delete = async(data)=>{
        try {
            const id = data.id;
            const deletelieu_image = await Lieu_imageModel.destroy({ where: { id }});
            if (deletelieu_image){
                return true
            } else{
                throw new Error("lieu_image not found");
            }
        } catch (error) {
            throw error
        }
    }
}

module.exports = Lieu_imageService;
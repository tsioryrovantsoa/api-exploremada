const LangueModel = require("../models/langueModel");

class LangueService{
    getAll = async() =>{
        try{
            return await LangueModel.findAll();
        }catch(error){
            throw error;
        }
    }
}

module.exports = LangueService;
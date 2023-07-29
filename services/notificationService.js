const notificationModel = require("../models/notificationModel");

class NotificationService{

    getAll = async() =>{
        try{
            return await notificationModel.findAll();
        }catch(error){
            throw error;
        }
    }

    getMy = async(id) =>{
        try{
            return await notificationModel.findAll({where:{id_utilisateur:id}});
        }catch(error){
            throw error;
        }
    }

}

module.exports = NotificationService;
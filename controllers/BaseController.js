const { Sequelize } = require("sequelize")

class BaseController {
     
    resOk = (res,data,message,statue = "ok") => {
        return res.status(200).send({statue, message, data})
     }
     
    resKo = (res,message, statue = "ko") => {
        console.log('ici', JSON.stringify(message));
        if(message instanceof Sequelize.ValidationError){
            return res.status(500).send({statue, message : message.errors[0].message})
        }
        return res.status(500).send({statue, message: message.message})
     }
     
}
module.exports = BaseController;
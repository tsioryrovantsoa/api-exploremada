const NotificationService = require("../services/notificationService");
const BaseController = require("./baseController");

class NotificationController extends BaseController{

    constructor(){
        super();
        this.notificationService = new NotificationService();
    }

    getAll = async(req,res) => {
        try{
            this.resOk(res,await this.notificationService.getAll(),"Liste de tous les notifications faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    getMy = async(req,res) => {
        try {
            this.resOk(res,await this.notificationService.getMy(req.userId),"Liste de mes notifications faite avec success")
        } catch (error) {
            console.log(error);
            this.resKo(res,error);
        }
    }

}

module.exports = NotificationController;
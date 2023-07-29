const Lieu_libService = require("../services/lieu_libService");
const BaseController = require("./baseController");

class Lieu_libController extends BaseController{

    constructor(){
        super();
        this.lieu_libService = new Lieu_libService();
    }

    getAll = async(req,res) => {
        try{
            this.resOk(res,await this.lieu_libService.getAll(req.query),"Liste des lieu faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    getById = async(req,res) => {
        try {
            this.resOk(res,await this.lieu_libService.getById(req.params.id),"Detail du lieu faite avec success")
        } catch (error) {
            console.log(error);
            this.resKo(res,error);
        }
    }

}

module.exports = Lieu_libController;
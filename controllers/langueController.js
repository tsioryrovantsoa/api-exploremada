const LangueService = require("../services/langueService");
const BaseController = require("./baseController");

class LangueController extends BaseController{

    constructor(){
        super();
        this.langueService = new LangueService();
    }

    getAllLangue = async(req,res) => {
        try{
            this.resOk(res,await this.langueService.getAll(),"Liste des langues faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error.message);
        }
    }

}

module.exports = LangueController;
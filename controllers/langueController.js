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
            this.resKo(res,error);
        }
    }

    createLangue = async(req,res) => {
        try{
            this.resOk(res,await this.langueService.create(req.body),"Creation langue avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    updateLangue = async(req,res) => {
        try {
            console.log(req.params);
            const langue = await this.langueService.update(req.body, req.params.id);
            this.resOk(res, langue, "langue modifié avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

    deleteSalle = async (req, res) => {
        try {
            const langue = await this.langueService.delete(req.body);
            this.resOk(res, langue, "Langue supprimer avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

}

module.exports = LangueController;
const Lieu_htmlService = require("../services/lieu_htmlService");
const BaseController = require("./baseController");

class Lieu_htmlController extends BaseController{

    constructor(){
        super();
        this.lieu_htmlService = new Lieu_htmlService();
    }

    getAllLieu_html = async(req,res) => {
        try{
            this.resOk(res,await this.lieu_htmlService.getAll(),"Liste des lieu_html faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    createLieu_html = async(req,res) => {
        try{
            this.resOk(res,await this.lieu_htmlService.create(req.body),"Creation lieu_html avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    updateLieu_html = async(req,res) => {
        try {
            console.log(req.params);
            const lieu_html = await this.lieu_htmlService.update(req.body, req.params.id);
            this.resOk(res, lieu_html, "lieu_html modifié avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

    deleteLieu_html = async (req, res) => {
        try {
            const lieu_html = await this.lieu_htmlService.delete(req.body);
            this.resOk(res, lieu_html, "Lieu_html supprimer avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

}

module.exports = Lieu_htmlController;
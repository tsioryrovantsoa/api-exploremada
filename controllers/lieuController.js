const LieuService = require("../services/lieuService");
const BaseController = require("./baseController");

class LieuController extends BaseController{

    constructor(){
        super();
        this.lieuService = new LieuService();
    }

    getAlllieu = async(req,res) => {
        try{
            this.resOk(res,await this.lieuService.getAll(),"Liste des lieus faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    createlieu = async(req,res) => {
        try{
            req.body.image_miniature = req.file ? req.file.filename : null;
            this.resOk(res,await this.lieuService.create(req.body),"Creation lieu avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    updatelieu = async(req,res) => {
        try {
            // console.log(req.params);
            const image_miniature = req.file ? req.file.filename : null;
            req.body.image_miniature = image_miniature;
            const lieu = await this.lieuService.update(req.body, req.params.id);
            this.resOk(res, lieu, "lieu modifié avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

    deleteLieu = async (req, res) => {
        try {
            const lieu = await this.lieuService.delete(req.body);
            this.resOk(res, lieu, "lieu supprimer avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

}

module.exports = LieuController;
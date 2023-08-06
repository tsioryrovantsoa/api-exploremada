const Lieu_imageService = require("../services/lieu_imageService");
const BaseController = require("./baseController");

class Lieu_imageController extends BaseController{

    constructor(){
        super();
        this.lieu_imageService = new Lieu_imageService();
    }

    getAllLieu_image = async(req,res) => {
        try{
            this.resOk(res,await this.lieu_imageService.getAll(),"Liste des lieu_images faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    createLieu_image = async(req,res) => {
        try{
            req.body.image = req.file ? req.file.filename : null;
            this.resOk(res,await this.lieu_imageService.create(req.body),"Creation lieu_image avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    updateLieu_image = async(req,res) => {
        try {
            console.log(req.params);
            const lieu_image = await this.lieu_imageService.update(req.body, req.params.id);
            this.resOk(res, lieu_image, "lieu_image modifié avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

    deleteLieu_image = async (req, res) => {
        try {
            const lieu_image = await this.lieu_imageService.delete(req.body);
            this.resOk(res, lieu_image, "Lieu_image supprimer avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

}

module.exports = Lieu_imageController;
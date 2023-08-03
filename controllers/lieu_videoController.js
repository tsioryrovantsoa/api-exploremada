const Lieu_videoService = require("../services/lieu_videoService");
const BaseController = require("./baseController");

class Lieu_videoController extends BaseController{

    constructor(){
        super();
        this.lieu_videoService = new Lieu_videoService();
    }

    getAllLieu_video = async(req,res) => {
        try{
            this.resOk(res,await this.lieu_videoService.getAll(),"Liste des Lieu_videos faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    getByIdLieu = async(req,res) => {
        try{
            this.resOk(res,await this.lieu_videoService.getByIdLieu(req.params.id),"Liste des Lieu_videos en ID Lieu faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }


    createLieu_video = async(req,res) => {
        try{
            req.body.video = req.file ? req.file.filename : null;
            this.resOk(res,await this.lieu_videoService.create(req.body),"Creation Lieu_video avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    updateLieu_video = async(req,res) => {
        try {
            console.log(req.params);
            const video = req.file ? req.file.filename : null;
            req.body.video = video;
            const lieu_video = await this.lieu_videoService.update(req.body, req.params.id);
            this.resOk(res, lieu_video, "Lieu_video modifié avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

    deleteLieu_video = async (req, res) => {
        try {
            const lieu_video = await this.lieu_videoService.delete(req.body);
            this.resOk(res, lieu_video, "Lieu_video supprimer avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

}

module.exports = Lieu_videoController;
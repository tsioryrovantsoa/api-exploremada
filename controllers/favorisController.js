const FavorisService = require("../services/favorisService");
const BaseController = require("./baseController");

class FavorisController extends BaseController{

    constructor(){
        super();
        this.favorisService = new FavorisService();
    }

    getAllFavoris = async(req,res) => {
        try{
            this.resOk(res,await this.favorisService.getAll(),"Liste des favoris faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }
    
    getByUserFavoris = async(req,res) => {
        try{
            this.resOk(res,await this.favorisService.getByUser(req.userId),"Liste des favoris de l'utilisateur faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    createFavoris = async(req,res) => {
        try{
            this.resOk(res,await this.favorisService.create(req.body),"Creation favoris avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    updateFavoris = async(req,res) => {
        try {
            console.log(req.params);
            const favoris = await this.favorisService.update(req.body, req.params.id);
            this.resOk(res, favoris, "favoris modifié avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

    deleteFavoris = async (req, res) => {
        try {
            const favoris = await this.favorisService.delete(req.body);
            this.resOk(res, favoris, "Favoris supprimer avec succès");
        } catch (error) {
            console.log(error);
            this.resKo(res, error); 
        }
    }

}

module.exports = FavorisController;
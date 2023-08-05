const ImageModel = require("../models/imageModel");
const BaseController = require("./baseController");

class ImageController extends BaseController{

    constructor(){
        super();
    }

    getAll = async(req,res) => {
        try{
            this.resOk(res,await ImageModel.findAll(),"Liste des images faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }
}

module.exports = ImageController;
const Video_LibView = require("../models/video_libView");
const BaseController = require("./baseController");

class VideoLibController extends BaseController{

    constructor(){
        super();
    }

    getAll = async(req,res) => {
        try{
            this.resOk(res,await Video_LibView.findAll(),"Liste des videos faite avec success")
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }
}

module.exports = VideoLibController;
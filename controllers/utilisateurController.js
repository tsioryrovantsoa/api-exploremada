const bcrypt = require('bcryptjs');
const UtilisateurService = require("../services/utilisateurService");
const BaseController = require("./baseController");
// inscription
class UtilisateurController extends BaseController{

  constructor(){
      super();
      this.utilisateurService = new UtilisateurService();
  }

inscription = async(req,res) => {
  try{
    this.resOk(res,await this.utilisateurService.create(req.body),"inscription reussi")
  }catch(error){
      console.log(error);
      this.resKo(res,error);
  }
}
}

module.exports = UtilisateurController;
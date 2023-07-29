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
getAllUtilisateur = async(req,res) => {
  try{
      this.resOk(res,await this.utilisateurService.getAll(),"Liste des utilisateur faite avec success")
  }catch(error){
      console.log(error);
      this.resKo(res,error);
  }
}



updateUtilisateur = async(req,res) => {
  try {
      console.log(req.params);
      const utilisateur = await this.utilisateurService.update(req.body, req.params.id);
      this.resOk(res, utilisateur, "utilisateur modifié avec succès");
  } catch (error) {
      console.log(error);
      this.resKo(res, error); 
  }
}

deleteUtilisateur = async (req, res) => {
  try {
      const utilisateur = await this.utilisateurService.delete(req.body);
      this.resOk(res, utilisateur, "Utilisateur supprimer avec succès");
  } catch (error) {
      console.log(error);
      this.resKo(res, error); 
  }
}

}

module.exports = UtilisateurController;
const AuthService = require("../services/authService");
const UtilisateurService = require("../services/utilisateurService");
const BaseController = require("./baseController");

class AuthController extends BaseController{
    constructor(){
        super();
        this.authService = new AuthService();
    }

    signIn = async(req,res) => {
        try{
            const { email, motdepasse } = req.body;
            const token = await this.authService.signIn(email, motdepasse);
            this.resOk(res,token,"Utilisateur connecter avec success");
        }catch(error){
            console.log(error);
            this.resKo(res,error);
        }
    }

    getMe = async(req,res) => {
        try {
            this.resOk(res, await new UtilisateurService().getById(req.userId),"Moi")
        } catch (error) {
            this.resKo(res,error);
        }
    }

    signOut = async(req,res) => {
        try {
            this.authService.signOut(req.userToken);
            this.resOk(res,{},"Utilisateur deconnecter");
        } catch (error) {
            console.log(error);
            this.resKo(res,error);
        }
    }
}

module.exports = AuthController;
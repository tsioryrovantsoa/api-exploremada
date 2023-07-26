const AuthService = require("../services/authService");
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
}

module.exports = AuthController;
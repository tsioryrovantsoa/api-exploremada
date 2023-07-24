var jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const bcrypt = require('bcryptjs');
//api login , migerer hoe valide ve ilay mail, ensuite hoe true ve mdp, mireturn données users izyy 
exports.login = async(req, res) => {
    try{
        // user = select * from utilisateur where email ="req.body.email"
         if (!user) {
           return res.status(404).send({ message: "Email introuvable." });
         }
   
         var passwordIsValid = bcrypt.compareSync(
           req.body.password,
           user.password
         );
   
         if (!passwordIsValid) {
           return res.status(401).send({
             accessToken: null,
             message: "Email ou mot de passe erronée !"
           });
         }
   
         var token = jwt.sign({ id: user.id }, config.secret, {
           expiresIn: 86400 // 24 hours
         });
   
         res.status(200).send({
           id: user._id,
           email: user.email,
           roles: authorities,
           name:user.name,
           accessToken: token
         });
         // ---------------------------
       } catch(err) {
        console.log('error : login ou mot de passe erronée');
         res.status(403).json({message:'login ou mot de passe erronée'})
       }
     }
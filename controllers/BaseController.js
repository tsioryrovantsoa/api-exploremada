class BaseController {
     
    resOk = (res,data,message,statue = "ok") => {
        return res.status(200).send({statue, message, data})
     }
     
    resKo = (res,message, statue = "ko") => {
        return res.status(500).send({statue, message})
     }
     
}
module.exports = BaseController;
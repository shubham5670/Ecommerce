class Errorhandler extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        
        Error.captureStackTrace(this,this.constructor)
        console.log(statusCode);
    }
}
module.exports = Errorhandler
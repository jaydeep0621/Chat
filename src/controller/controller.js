const async = require("async");

module.exports = {

    start: async(req,res,next) => {
    try{
    }
    catch(err){
            res.send("Something Went Wrong");
            return  next(err);
        }
    } 
}
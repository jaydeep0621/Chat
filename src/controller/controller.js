const async = require("async");

module.exports = {

    start : async(req,res,next)=> {
        try{
        const message = req.body.message;
        socket.emit('test', message);
        res.json(message);
        }catch(err){
            res.send("Something Went Wrong");
            return next(err);
        }
    }
}
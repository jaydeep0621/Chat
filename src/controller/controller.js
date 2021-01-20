const async = require("async");
const bcrypt = require("bcrypt");
const Appconfig = require("../config/config.json");

module.exports = {

    messagehash: async(message)=>{
        let msg = bcrypt.hashSync(message,Number(Appconfig.SALT.ROUND));
        console.log(msg);
        return msg;
    },

    start : async(req,res,next) => {
        try{
            const user = req.body.name;
            const message = req.body.message;
            const msg = await module.exports.messagehash(message);
            console.log(msg);
            socket.emit('test', msg , user);
            res.send("Message Has Been Succesfully Send")
        }catch(err){
            res.send("Something Went Wrong");
            return next(err);
        }
    }
}
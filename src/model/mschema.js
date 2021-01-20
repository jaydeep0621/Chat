const mongoose = require("mongoose");

const uschema = new mongoose.Schema({
    username:{
        required:true,
        type:String
    },
    message:{
        required:true,
        type:String
    }  
})

module.exports =  mongoose.model("message", uschema);
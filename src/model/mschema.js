const mongoose = require("mongoose");

const uschema = new mongoose.Schema({
    //username:{
    //    unique:true,
    //    required:true,
    //    type:String
    //},
    message:{
        required:true,
        type:String
    }  
})

module.exports =  mongoose.model("messageschema", uschema);
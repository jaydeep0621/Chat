const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const mongo = process.env.DB;

const option = {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false   
}

mongoose.connect(mongo, option)
.then(()=>{
    console.log(`DB Successfully Connected for Message Saving ${mongo}`);
},(err)=>{
    console.log("Error in DB Connection", err);
})

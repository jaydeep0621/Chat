const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const dotenv = require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const i18n = require("i18n");
const v1route = require("../Chat/src/route/route");
require("./src/config/db");
const uschema = require("./src/model/mschema");
const bcrypt = require("bcrypt");
const Appconfig = require("./src/config/config.json");

const port = process.env.PORT;

app.use(helmet());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use("/data", v1route);

i18n.configure({
    locales:"en",
    directory: __dirname + "./src/locales"
})

app.use((req,res,next)=>{
    i18n.init(req,res);
    return next();
})

app.use((err,req,res,next)=>{
    console.log(err);
    return res.status(500).send("Internal Server Error");
})

const server = app.listen(port, ()=> {
    console.log(`Listening at Port Number : ${port}`);
})

const io = require("socket.io")(server);

io.on('connection', (socket) => {
    console.log("User Connected");

    socket.on('test', (msg,name) => {
        let Uschema = new uschema();
        const message = bcrypt.hash
        Uschema["message"] = msg;
        Uschema["username"] = name;
        const update = Uschema.save();
        console.log("Message from the Client is : ",msg);
    })

    socket.on('disconnect', () => {
        console.log("User Disconnected");
    })
})
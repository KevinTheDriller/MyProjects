const express = require("express");
const ejs = require("ejs")
const bodyParser = require("body-parser");
const home = require("./controllers/homeController");
const path = require("path");
const port = process.env.PORT||2000;
const esther = express();
const insert=require(path.join(__dirname,'insert'))
esther.set("views",path.join(__dirname,"views"));
esther.set("view engine","ejs")
esther.use(insert)
esther.use(bodyParser.urlencoded({extended:true}));
esther.listen(port,()=>{
    console.log(`app is running on port of ${port}`)
})
esther.use("/",home)
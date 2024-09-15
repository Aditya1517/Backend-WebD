import express from "express";
import bodyParser from "body-parser";
// to get full path 
import { dirname } from "path";  // dirname = directory name 
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended:true})); // middleware

function bandNameGenarator(req,res,next){
  console.log(req.body);
  bandName = req.body["street"]+req.body["pet"];  
  next();
}

app.use(bandNameGenarator)

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",(req,res) => {
  res.send(`<h1>Your band name is :</h1><h2>${bandName}</h2>`);   // by this we can send something to out server
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

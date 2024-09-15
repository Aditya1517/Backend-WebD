//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from 'express'

import { dirname } from "path";  // dirname = directory name 
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// the above 3 lines requires used for to get exact path of the line 
import bodyParser from "body-parser"

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended:true}));

// this is the middleware we created where we authorising the request before it gets handel
function passwordCheck(req,res,next){
    const password = req.body["password"];
    if(password === "ILoveProgramming"){
        userIsAuthorised = true;
    }
    next();
}
app.use(passwordCheck);

app.get("/",(req,res)=>{
        res.sendFile(__dirname+"/public/index.html");
})

app.post("/check",(req,res)=>{
    if(userIsAuthorised){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/index.html");
    }
})

app.listen(port, ()=>{
    console.log(`Server listning on the port ${port}`);
})
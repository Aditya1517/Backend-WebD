import express from "express";
import { dirname } from "path";  // dirname = directory name 
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// the above 3 lines requires used for to get exact path of the line 
import bodyParser from "body-parser"

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));  // this how body parser(middleware) is used most of the time 

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");  // res.sendFile requires the exact path 
});

app.post("/submit",(req,res)=>{
  console.log(req.body);   // by this we can send something to out server
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


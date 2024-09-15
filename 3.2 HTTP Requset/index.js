import express from "express"

const myApp = express();
const port = 3000;

myApp.get("/" , (req , res) => {  // here "/" targets the home page 
    // console.log(req.rawHeaders);
    res.send("<h1>Hello World!!!</h1>");
});

myApp.get("/about" , (req , res) => {
    res.send("<p>I'm Aditya</p>");
});

myApp.get("/contact" , (req , res) => {
    res.send("<p>I'm Aditya and contact number is 1234567890</p>");
});

myApp.listen(port , () =>{
    console.log("Server listning");
});